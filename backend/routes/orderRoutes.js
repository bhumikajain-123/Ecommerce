const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {getCartItem,placeOrder,verifyPayment} = require("../controllers/orderController");

router.get("/",auth,getCartItem);
router.post("/verify", auth, verifyPayment);

router.post("/:id",auth,placeOrder);

module.exports = router;