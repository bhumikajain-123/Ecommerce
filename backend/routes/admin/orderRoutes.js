const express = require("express");

const router = express.Router();
const {getOrder,getIdOrder,updateOrder,deleteOrder,getOrderItem} = require("../../controllers/admin/orderController");
const {adminMiddleware} = require("../../middleware/adminMiddleware");
// router.post("/order",adminMiddleware,addOrder);
router.get("/",adminMiddleware,getOrder);
router.get("/:id",adminMiddleware,getIdOrder);
router.put("/:id/status",adminMiddleware,updateOrder);
router.delete("/:id",adminMiddleware,deleteOrder);
router.get("/orderItem/:id",adminMiddleware,getOrderItem);

//---------------------------  some bug in that route ----------------------------

// router.get("/category/:id",adminMiddleware,getOrderCategory);
module.exports = router;