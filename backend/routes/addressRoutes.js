const express = require("express");
const auth = require("../middleware/auth");
const {addAddress,getAddress,updateAddress,deleteAddress,getAddressById} = require("../controllers/addressController");
const router = express.Router();




router.post("/",auth,addAddress);
router.get("/",auth,getAddress);
router.get("/:id",auth,getAddressById);
router.put("/:id",auth,updateAddress);
router.delete("/:id",auth,deleteAddress);

module.exports = router;
