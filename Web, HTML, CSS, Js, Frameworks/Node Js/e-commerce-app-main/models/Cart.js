const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    produncts: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ]
},
{timestamps: true}
);

module.exports = mongoose.model("Cart", cartSchema);