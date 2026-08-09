const express = require("express");

const router = express.Router();
const {addProduct,getProduct,getIdProduct,updateProduct,deleteProduct,getProductCategory} = require("../../controllers/admin/productController");
const {adminMiddleware} = require("../../middleware/adminMiddleware");
router.post("/",adminMiddleware,addProduct);
router.get("/",adminMiddleware,getProduct);
router.get("/:id",adminMiddleware,getIdProduct);
router.put("/:id",adminMiddleware,updateProduct);
router.delete("/:id",adminMiddleware,deleteProduct);


router.get("/category/:id",adminMiddleware,getProductCategory);
module.exports = router;