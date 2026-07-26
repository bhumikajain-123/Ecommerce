const mongoose = require("../config/db");

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    
    totalAmount: {
        type: Number,
        required: true
    },

    status:{
        type:String,
        enum:["Pending","Processing","Shipped","Delivered"],
        default:"Pending"
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt : {
        type : Date,
        default : Date.now
    }
});

const Order = mongoose.model("Order",orderSchema);

module.exports = Order;