const mongoose = require("../config/db");

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    
   
   
},
{timestamps : true});

const Cart = mongoose.model("Cart",cartSchema);

module.exports = Cart;