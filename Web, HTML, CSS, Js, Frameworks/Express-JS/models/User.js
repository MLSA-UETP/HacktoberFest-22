const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        min: 3,
        max:20,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        min:2,
        max:20,
        required:true
    },
    address:{
        type:String,
        min:3,
        max:30,
        
    }
}) 

module.exports = mongoose.model("User", userSchema)