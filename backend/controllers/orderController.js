const cart = require("../models/Cart");
const cartItem = require("../models/cartItem");
const order = require("../models/Order");
const address = require("../models/Address");
const razorpay = require("../config/razorpay");

const crypto = require("crypto");

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

        if(paymentMethod === "COD"){
            // Create order
              const placeItem = new order({
            userId: userId,
            addressId: Address._id,
            totalAmount: totalAmount,
            paymentMethod: paymentMethod,
             paymethodStatus: "Pending"
        });

        await placeItem.save();

        res.status(200).json({
            message: "Successfully stored",
            placeItem
        });

        //  ---------for online -----------------

        }else if(paymentMethod === "ONLINE"){

            const options = {
                amount : totalAmount * 100,
                currency : "INR",
                receipt : `receipt_${Date.now()}`
            }
                   const razorpayOrder = await razorpay.orders.create(options);

                     // 2. Create MongoDB order
    const placeItem = new order({

        userId: userId,

        addressId: Address._id,

        totalAmount: totalAmount,

        paymentMethod: "ONLINE",

        paymethodStatus: "Pending",

        razorpayOrderId: razorpayOrder.id
    });


    // 3. Save MongoDB order
    await placeItem.save();

    

    res.status(200).json({
        message: "Razorpay order created",
          razorpayOrder: razorpayOrder,

        order: placeItem
    });
            }

        } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};


//  --------------payment verification --------------------------
const verifyPayment = async (req,res) => {

    try{


         
        const { razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature} = req.body;

           
            
         const body =    razorpay_order_id + "|" + razorpay_payment_id;
          const hmac = crypto.createHmac(
            "sha256",
            process.env.RAZORPAY_KEY_SECRET
        );
               hmac.update(body);

                const expectedSignature =
            hmac.digest("hex");


             if (expectedSignature !== razorpay_signature) {

            return res.status(400).json({
                message: "Payment verification failed"
            });
        }

        // Step 7: Payment is verified
        return res.status(200).json({
            message: "Payment verified successfully"
        });
    
    }catch(err) {
          return res.status(500).json({
            message: err.message
        });
    }
}

module.exports = {getCartItem,placeOrder,verifyPayment};
