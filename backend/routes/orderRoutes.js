const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {getCartItem,placeOrder,verifyPayment} = require("../controllers/orderController");

router.get("/",auth,getCartItem);
router.post("/:id",auth,placeOrder);
router.post("/verify-payment", auth, verifyPayment);

module.exports = router;