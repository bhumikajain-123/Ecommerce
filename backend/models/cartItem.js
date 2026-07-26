const mongoose = require("../config/db");

  const cartItemSchema =  new mongoose.Schema({

    cartId : {
         
                type: mongoose.Schema.Types.ObjectId,
                ref: "Cart",
                required: true
        
    },
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true
    },
    quantity : {
        type : Number,
        required : true,
         min : 1
    },
    price : {
        type : Number,
        required : true
    }

  });

  const cartItem = mongoose.model("cartItem",cartItemSchema);

  module.exports = cartItem;