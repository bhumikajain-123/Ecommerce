const express = require("express");
const auth = require("../middleware/auth");
const app = express();
const {createCart} = require("../controllers/cartController");

const router = express.Router();
const Cart = require("../models/Cart");


router.post("/",auth,createCart);

module.exports = router;