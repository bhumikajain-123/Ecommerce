const express = require("express");

const router = express.Router();
const {addCategory,getCategory,getIdCategory,updateCategory,deleteCategory} = require("../../controllers/admin/categoryController");
const {adminMiddleware} = require("../../middleware/adminMiddleware");
router.post("/",adminMiddleware,addCategory);
router.get("/",adminMiddleware,getCategory);
router.get("/:id",adminMiddleware,getIdCategory);
router.put("/:id",adminMiddleware,updateCategory);
router.delete("/:id",adminMiddleware,deleteCategory);



module.exports = router;