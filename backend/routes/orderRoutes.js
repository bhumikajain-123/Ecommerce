const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {getCartItem,placeOrder} = require("../controllers/orderController");

router.get("/",auth,getCartItem);
router.post("/:id",auth,placeOrder);

module.exports = router;