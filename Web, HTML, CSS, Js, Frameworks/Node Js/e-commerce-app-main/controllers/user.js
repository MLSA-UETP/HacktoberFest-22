const mongoose = require('mongoose');
const Users = require("../models/User");
const CryptoJS = require("crypto-js")

module.exports = {
    updateUser: async (req, res) => {
        try {
            const { user } = req;
            const { username, email, password } = req.body;
            if (password) {
                encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SECRET).toString();
            }
            const updatedUser = await Users.findByIdAndUpdate(user.id, {
                $set: {
                    username: username ? username : user.name,
                    email: email ? email : user.email,
                    password: encryptedPassword ? encryptedPassword : user.password,
                },
                new: true
            })
            res.status(200).send({ updatedUser });
            // const updatedUser = await Users.updateOne(
            //     {
            //       _id: user.Id,
            //     },
            //     {
            //       $set: {
            //         password: encryptedPassword,
            //       },
            //     }
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { user } = req;
            await Users.findByIdAndDelete(user.id);
            res.status(200).json("User has been deleted");
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    getUser: async (req, res) => {
        try {
            const { user } = req;
            let data = await Users.findById(user.id);
            // data = data.toJSON();
            // delete data.password;
            const { password, ...others } = data._doc;
            res.status(200).send({ others });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const query = req.query.new;
            const data = query ? await Users.find().sort({_id: -1}).limit(1) : await Users.find();
            res.status(200).send({ data });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    // getLastUsers: async (req, res) => {
    //     try {
    //         const {userId} = req.query;  will return the last student or students (depends on limit) insert in database.
    //         const data = userId ? await Users.find().sort({_id: -1}).limit(1) : await Users.find();
    //         res.status(200).send({ data });
    //     } catch (err) {
    //         console.log(err);
    //         return res
    //             .status(err.status || 500)
    //             .send(err.message || "Something went wrong");
    //     }
    // }
    // getFirstUsers: async (req, res) => {
    //     try {
    //         const {userId} = req.query;
    //         const data = userId ? await Users.find().sort({_id: 1}).limit(2) : await Users.find();
    //         res.status(200).send({ data });
    //     } catch (err) {
    //         console.log(err);
    //         return res
    //             .status(err.status || 500)
    //             .send(err.message || "Something went wrong");
    //     }
    // }
    // getUserByqueryId: async (req, res) => {
    //     try {
    //         const {userId} = req.query;
    //         const data = await Users.findById(userId);
    //         res.status(200).send({ data });
    //     } catch (err) {
    //         console.log(err);
    //         return res
    //             .status(err.status || 500)
    //             .send(err.message || "Something went wrong");
    //     }
    // }
    
    // statistics
    stats: async (req, res) => {
        try {
            const date = new Date();
            const lastYear = new Date(date.setFullYear(date.getFullYear() -1)); // It will return last year today.
            const data = await Users.aggregate([
                {$match: {createdAt: { $gte: lastYear }}},
                {
                    $project: {
                        month: { $month: "$createdAt"}  // her month variable will take month number from createdAt
                    },
                },
                {
                $group: {
                    _id: "$month",
                    total: {$sum: 1},
                }
            }
            ])
            res.status(200).send({ data });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    }
}
