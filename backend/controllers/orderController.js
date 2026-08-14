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


const placeOrder = async (req, res) => {
    try {

        const userId = req.user.id;
        const addressId = req.params.id;

        // Get payment method from frontend
        const { paymentMethod } = req.body;

        // Check payment method
        if (!paymentMethod) {
            return res.status(400).json({
                message: "Payment method is required"
            });
        }

        // Find user's cart
        const userCart = await cart.findOne({
            userId: userId
        });

        if (!userCart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        // Find cart items
        const items = await cartItem.find({
            cartId: userCart._id
        });

        if (items.length === 0) {
            return res.status(400).json({
                message: "Cart is empty"
            });
        }

        // Calculate total
        const totalAmount = items.reduce(
            (total, current) =>
                total + current.price * current.quantity,
            0
        );

        // Find address
        const Address = await address.findOne({
            _id: addressId,
            userId: userId
        });

        if (!Address) {
            return res.status(404).json({
                message: "Address not found"
            });
        }

        // Create order
        const placeItem = new order({
            userId: userId,
            addressId: Address._id,
            totalAmount: totalAmount,
            paymentMethod: paymentMethod,
            paymentStatus: "Pending"
        });

        await placeItem.save();

        res.status(200).json({
            message: "Successfully stored",
            placeItem
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};


module.exports = {getCartItem,placeOrder};
