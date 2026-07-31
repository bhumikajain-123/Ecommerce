const express = require("express");
const auth = require("../middleware/auth");
const app = express();
const {addCart,getCartItem,updateQuantity,deleteCartItem} = require("../controllers/cartItemController");

const router = express.Router();
const Cart = require("../models/cartItem");

router.post("/",auth,addCart);
router.get("/",auth,getCartItem);
router.put("/quantity/:id",auth,updateQuantity);
router.delete("/:id", auth, deleteCartItem);



module.exports = router;