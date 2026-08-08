const cart = require("../models/Cart");
const cartItem = require("../models/cartItem");
const order = require("../models/Order");
const address = require("../models/Address");


//   ------------------------getCartItem --------------------------------


const getCartItem = async (req, res) => {
    try {
        const userCart = await cart.findOne({
            userId: req.user.id
        });

        if (!userCart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        const items = await cartItem.find({
            cartId: userCart._id
        });

        const totalAmount = items.reduce(
            (total, current) =>
                total + current.price * current.quantity,
            0
        );

        res.status(200).json({
            items,
            totalAmount
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};


//   -------------------------place order -------------------------------------------


const placeOrder = async (req,res) =>{
    try {
        const userId = req.user.id;
      const addressId = req.params.id;
        const userCart = await cart.findOne({
            userId: req.user.id
        });

        if (!userCart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        const items = await cartItem.find({
            cartId: userCart._id
        });

        const totalAmount = items.reduce(
            (total, current) =>
                total + current.price * current.quantity,
            0
        );

           const Address = await address.findOne({
      _id: addressId,
      userId: userId
    });

     if (!Address) {
      return res.status(404).json({
        message: "Address not found"
      });
    }

const placeItem = new order({userId,addressId : Address._id,totalAmount});

await placeItem.save();


        res.status(200).json({
           message : "successfully stored",
           placeItem
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}



module.exports = {getCartItem,placeOrder};
