const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {getOrderItem,getOrder,getMyOrders,updateStatus} = require("../controllers/orderItemController");

router.post("/",auth,getOrderItem);
router.get("/:id",auth,getOrder);
router.get("/",auth,getMyOrders);
router.patch("/status/:id",auth,updateStatus);


module.exports = router;