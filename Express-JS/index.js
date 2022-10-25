const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./routers/user');
require('dotenv').config()
const cors = require("cors")
const PORT = process.env.PORT|| 3001
const app = express();
const corsOptions={exposedHeaders:['Content-length', 'token', 'Authorization'], origin: 'http://localhost:3000'}
app.use(cors(corsOptions))
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@newshopfiy.g11qcbs.mongodb.net/?retryWrites=true&w=majority`,
 ()=> console.log("Connected to DB Sucessfully"))
app.use(express.json())
app.use("/api/user", userRoutes)

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`))