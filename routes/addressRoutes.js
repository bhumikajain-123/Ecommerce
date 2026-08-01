const express = require("express");
const auth = require("../middleware/auth");
const {addAddress,getAddress,updateAddress,deleteAddress} = require("../controllers/addressController");
const router = express.Router();




router.post("/",auth,addAddress);
router.get("/",auth,getAddress);
router.put("/:id",auth,updateAddress);
router.delete("/:id",auth,deleteAddress);

module.exports = router;
