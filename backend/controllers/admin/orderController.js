const Order = require("../../models/Order");
const orderItem = require("../../models/orderItem");

//   ----------------add order ---------------------------
const addOrder = async (req,res) =>{
    try{
    const order = new Order({
        name : req.body.name,
        description : req.body.description,
    

    });
    await order.save();
    

    res.json("cateogory added");
}catch(err){
    res.status(500).json(err.message);
}
}

//  ---------------get all order data --------------------

const getOrder = async (req,res) =>{

     try{

        const order = await Order.find().populate("userId");
        res.json(order);
    }catch(err){
        res.status(500).json(err.message);
    }
}
//  --------------------get order by id --------------------

const getIdOrder = async (req,res) =>{

    try{
    const id = req.params.id;
    const order = await Order.findById(id).populate("userId").populate("addressId");
    res.json(order);

}catch(err){
    res.status(500).json(err.message);
}
   
}

//  ----------------update order -------------------------

const updateOrder = async (req, res) => {
    try {

        const id = req.params.id;
        const { status } = req.body;

        const order = await Order.findByIdAndUpdate(
            id,
            {
                status: status
            },
            {
                new: true
            }
        );

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Order updated successfully",
            order: order
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};
const deleteOrder = async (req,res) =>{
      try {
        const id = req.params.id;

        const order = await Order.findByIdAndDelete(id);

        if (!order) {
            return res.status(404).json("Order not found");
        }

        res.status(200).json({
            success: true,
            message: "Order deleted successfully",
            order
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

//  -----------------get product that ordered by user -------------------------

const getOrderItem = async (req, res) => {
    try {

        const id = req.params.id;

        const data = await orderItem.find({
            orderId: id
        }).populate("productId");

        res.status(200).json(data);

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};
module.exports = {addOrder,getOrder,getIdOrder,updateOrder,deleteOrder,getOrderItem};