const User = require("../../models/User");
const Product = require("../../models/Product");
const Order =  require("../../models/Order");


const dashboard = async (req,res) =>{
   try{
    const user = await  User.countDocuments({role:"user"});
    const product = await Product.countDocuments();
    const order = await Order.countDocuments();


     const sales = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    totalSales: {
                        $sum: "$totalAmount"
                    }
                }
            }
        ]);

    res.status(200).json({user,product,order,sales});
   }catch(err){
    res.status(500).json(err.message);
   }

}

module.exports = {dashboard};