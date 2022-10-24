const mongoose = require("mongoose");
const Orders = require("../models/Order");

module.exports = {
    createOrder: async (req, res) => {
        try {
            const newOrder = new Orders(req.body);
            const savedOrder = await newOrder.save();
            res.status(200).send({ savedOrder });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    updateOrder: async (req, res) => {
        try {
            const { user } = req;
            const { orderId } = req.params;
            const updatedOrder = await Orders.findByIdAndUpdate(orderId, {
                $set: req.body,
            },
                { new: true }
            );
            res.status(200).send({ updatedOrder });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    deleteOrder: async (req, res) => {
        try {
            const { orderId } = req.params;
            await Orders.findByIdAndDelete(orderId);
            res.status(200).send("Order has been deleted ...");
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    getOrder: async (req, res) => {
        try {
            const { orderId } = req.params;
            const order = await Orders.findById(orderId);
            res.status(200).send({ order });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    getAllOrders: async (req, res) => {
        try {
            const orders = await Orders.find();
            res.status(200).send({ orders });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    getIncomeStatistics: async (req, res) => {
        try {
            const date = new Date(); // For example it will return 1 September
            const lastMonth = new Date(date.setMonth(date.getMonth() - 1)); // It will return August.
            const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1)); // It will return July.
            const income = await Orders.aggregate([
                { $match: { createdAt: { $gte: previousMonth } } },
                {
                    $project: {
                        month: { $month: "$createdAt" },
                        sales: "$amount",
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: "$sales" },
                    },
                },
            ]);
            res.status(200).send({ income });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    }
}