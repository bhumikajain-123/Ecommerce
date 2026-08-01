const Order = require("../models/Order");
const Cart = require("../models/Cart");
const cartItem = require("../models/cartItem");
const orderItem = require("../models/orderItem");



const getOrderItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });

       if(!cart){
        return res.status(404).json({
            message:"Cart not found"
        });
    }


    const cartItems = await cartItem.find({ cartId: cart._id }).populate("productId");
   

    if(cartItems.length===0){
        return res.status(400).json({
            message:"Cart is empty"
        });
    }
    order = await Order.findOne({ userId: req.user.id });

    for(const item of cartItems){
await orderItem.create({
    orderId : order._id,
    productId : item.productId._id,
    quantity : item.quantity,
    price : item.price
});
    }
     await cartItem.deleteMany({ cartId: cart._id });
    res.json({
        message:"Order items created successfully",
        
    });



  } catch (err) {
    res.status(500).send(err.message);
}
}


const getOrder = async (req, res) => {

const orderId = req.params.id;
try {
    const orderItems = await orderItem.find({orderId: orderId}).populate("productId");
    res.json(orderItems);
} catch (err) {
    res.status(500).send(err.message);
}
}


const getMyOrders = async (req, res) => {
    try {

        const orders = await Order.find({
            userId: req.user.id
        });

        res.status(200).json(orders);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};


const updateStatus = async (req, res) => {
try{
    const orderId = req.params.id;
    const {status} = req.body;

    if(!orderId || !status){
        return res.status(400).json({
            message:"Order id and status are required"
        });
    }
    const order = await Order.findByIdAndUpdate(orderId,{status: status},{new:true});
      
    res.status(200).json({
        message:"Order status updated successfully",
        order: order
    });


}catch(err){
    res.status(500).json({
        message: err.message
    });
}

}
module.exports = {
    getOrderItem,getOrder,getMyOrders,updateStatus
};


