const Cart = require("../models/Cart");



const createCart = async (req, res) => {
    console.log(req.user.id);
    try {
        const cartExist = await Cart.findOne({
            userId: req.user.id
        });

        if (cartExist) {
            return res.status(400).json({
                message: "Cart already exists"
            });
        }

        const cart = new Cart({userId : req.user.id});
        await cart.save();

        res.status(201).json({
            message: "Cart created successfully",
            cart
        });

    } catch (err) {
        res.status(500).send(err.message);
    }
};


module.exports = {createCart};