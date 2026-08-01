
const Cart = require("../models/Cart");
const cartItem = require("../models/cartItem");



const addCart = async (req, res) => {
    try {
        const user_id = req.user.id;

        const { productId, quantity, price } = req.body;

        const cart = await Cart.findOne({ userId: user_id });

        if (!cart) {
            return res.status(500).send("cart not exists");
        }

        const itemExist = await cartItem.findOne({
            cartId: cart._id,
            productId
        });

        if (itemExist) {
            itemExist.quantity += 1;
            await itemExist.save();

            return res.status(200).json({
                message: "Quantity updated",
                itemExist
            });
        }

        const addCartItem = new cartItem({
            cartId: cart._id,
            productId,
            quantity,
            price
        });

        await addCartItem.save();

        return res.status(201).json({
            message: "Product added to cart",
            addCartItem
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: err.message
        });
    }
};


//  -------------------------user get cart item which add ------------------------

const getCartItem = async (req,res)=>{
    try{
        const userId = req.user.id;
const cart = await Cart.findOne({userId});

        const items = await cartItem.find({cartId : cart._id});
res.status(200).json({
    message : "cart item",
    items
})
    }catch(err){
        res.status(500).send(err.message);
    }

}


//  -----------------------------update quantity --------------------------------

const updateQuantity = async (req,res)=>{

    try{
   const {action} = req.body;
   console.log(action);
   const cartItemId = req.params.id; 
const item = await cartItem.findById(cartItemId);

if(!item){

     return   res.status(500).send("cart item not found");

}
if(action === "increase"){
    item.quantity+=1
}
        if (action === "decrease" && item.quantity > 1) {
            item.quantity -= 1;
        }

await item.save();

res.status(200).json({
    message : "quantity updated",
    item
})



}catch(err){
    res.status(500).send(err.message);
}
}


// -----------------------------delete cart item ---------------------------------

const deleteCartItem = async (req, res) => {
    try {

        const cartItemId = req.params.id;

        const item = await cartItem.findById(cartItemId);

        if (!item) {
            return res.status(404).json({
                message: "Cart item not found"
            });
        }

        await item.deleteOne();

        res.status(200).json({
            message: "Cart item removed successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {addCart,getCartItem,updateQuantity,deleteCartItem};