const express = require("express");

const router = express.Router();
const {getUser,getIdUser,updateUser,deleteUser} = require("../../controllers/admin/userController");
const {adminMiddleware} = require("../../middleware/adminMiddleware");
// router.post("/user",adminMiddleware,addUser);
router.get("/",adminMiddleware,getUser);
router.get("/:id",adminMiddleware,getIdUser);
router.put("/:id",adminMiddleware,updateUser);
router.delete("/:id",adminMiddleware,deleteUser);

//---------------------------  some bug in that route ----------------------------

// router.get("/category/:id",adminMiddleware,getUserCategory);
module.exports = router;