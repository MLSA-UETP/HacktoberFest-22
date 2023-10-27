const mongoose = require("mongoose");
const Carts = require("../models/Cart");

module.exports = {
    createCart: async (req, res) => {
        try {
            const newCart = new Products(req.body);
            const savedCart = await Carts.save();
            res.status(200).send({ savedCart });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    updateCart: async (req, res) => {
        try {
            const { user } = req;
            const { cartId } = req.params;
            const updatedCart = await Carts.findByIdAndUpdate(cartId, {
                $set: req.body,
            },
                { new: true }
            );
            res.status(200).send({ updatedCart });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    deleteCart: async (req, res) => {
        try {
            const { cartId } = req.params;
            await Carts.findByIdAndDelete(cartId);
            res.status(200).send("Cart has been deleted ...");
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    getCart: async (req, res) => {
        try {
            const { cartId } = req.params;
            const cart = await Carts.findById(cartId);
            res.status(200).send({ cart });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    getAllCarts: async (req, res) => {
        try {
            const carts = await Carts.find();
            res.status(200).send({ carts });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
}