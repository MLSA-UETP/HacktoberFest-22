const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json());
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

mongoose
    .connect(process.env.MONGO_URL)
    .then(pass => {
        console.log("Database connected Successfully");
    })
    .catch(err => {
        console.log("Some error while connecting to database", err)
    })

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.use((req, res) => {
    return res.status(404).send("Error 404, Route not found");
});