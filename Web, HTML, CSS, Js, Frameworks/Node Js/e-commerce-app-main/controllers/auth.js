const mongoose = require('mongoose');
const Users = require("../models/User");
const CryptoJS = require("crypto-js")
// npm i crypto-js  really strong hashing algorithm. Alot of many other algorithm is also avaiable
const jwt = require("jsonwebtoken");

module.exports = {
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const encryptingPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SECRET).toString(); // because password has type String
            const newUser = new Users({
                username: username,
                email: email,
                password: encryptingPassword
            });
            const savedUser = await newUser.save();
            res.status(201).send({ savedUser });
            // 200 successful
            // 201 successfully added
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                throw { status: 400, message: "Required feilds cannot be empty" };
            }

            let user = await Users.findOne({ username });
            if (!user) {
                throw { status: 404, message: "User doesn't exist" };
            }

            const decryptPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET).toString(CryptoJS.enc.Utf8);
            if (decryptPassword !== password) {
                throw { status: 400, message: "Wrong credentials!" };
            }

            user = user.toJSON();
            delete user.password;
            const token = jwt.sign({
                user: user
            },
                process.env.JWT_SECRET,
                { expiresIn: "20m" }
            )
            res.status(200).send({ token, user });
        }
        // try {
        //     let user = await Users.findOne({
        //         username: req.body.username,
        //     })
        //     if (!user) {
        //         res.status(401).send("Wrong credentials user!");
        //     }
        //     const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);
        //     const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        //     if (originalPassword !== req.body.password) {
        //         res.status(401).send("Wrong credentials!");
        //     }
        //     const accessToken = jwt.sign({
        //         id: user._id,
        //         isAdmin: user.isAdmin,
        //     },
        //         process.env.JWT_SECRET,
        //         { expiresIn: "1m" }
        //     );
        //     const { password, ...others } = user._doc;
        // res.status(200).json({ accessToken, ...others });
        catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    }
}


