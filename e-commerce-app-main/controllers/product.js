const mongoose = require("mongoose");
const Products = require("../models/Product");

module.exports = {
    createProducts: async (req, res) => {
        try {
            const { title, desc, img, categories, size, color, price } = req.body;
            const newProduct = new Products({
                title,
                desc,
                img,
                categories,
                size,
                color,
                price,
            });
            const savedProduct = await newProduct.save();
            res.status(200).send({ savedProduct });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    updateProducts: async (req, res) => {
        try {
            const {productId} = req;
            const { title, desc, img, categories, size, color, price } = req.body;
            const updatedProduct = await Products.findByIdAndUpdate(productId, {
                $set: {
                    title: title,
                    desc: desc,
                    img: img,
                    categories: categories,
                    size: size,
                    color: color,
                    price: price
                },
                new: true,
            })
            res.status(200).send({ updatedProduct });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    deleteProducts: async (req, res) => {
        try {
            const { productId } = req;
            const updatedProduct = await Products.findByIdAndDelete(productId);
            res.status(200).send("Product has been deleted ...");
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    getProduct: async (req, res) => {
        try {
            const {productId} = req.params;
            const product = await Products.findById(productId);
            res.status(200).send({product});
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
    getAllProducts: async (req, res) => {
        try {
            const qNew = req.query.new;
            const qCategory = req.query.category;
            let products;
            if(qNew){// { http:localhost:5000/api/products?new=true
                products = await Products.find().sort({createdat: -1}).limit(1);
            }
            else if(qCategory){  // { http:localhost:5000/api/products?catagory=man or category=Tshirt
                products = await Products.find({categories: { 
                    $in: [qCategory],
                }})
            }else{
                products = await Products.find();
            }
            res.status(200).send({products});
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong");
        }
    },
}