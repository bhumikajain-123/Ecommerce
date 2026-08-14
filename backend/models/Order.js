const mongoose = require("../config/db");

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    addressId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Address",
        required:true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
    type: String,
    enum: [
        "Pending",
        "Confirmed",
        "Shipped",
        "Delivered",
        "Cancelled"
    ],
    default: "Pending"
},

paymentMethod : {
    type : String,
    enum : ["COD","ONLINE"],
    required : true
},

   paymethodStatus : {
    type : String,
    enum : ["Pending","Paid","Failed"],
    default : "Pending"
   }
  
},{ timestamps: true });

const Order = mongoose.model("Order",orderSchema);

module.exports = Order;