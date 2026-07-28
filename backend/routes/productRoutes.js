const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


//--------------------------add product -------------------------- 

router.post("/",async (req,res)=>{
    try{
const product = new Product( req.body);
await product.save();
res.status(200).send("product add sucessfully");
    }catch(err){
        res.status(500).send(err.message);

    }

});

// ---------------------want to get all product ------------------

router.get("/",async (req,res)=>{
    try{
        const product = await Product.find();
        res.json(product);
      
    }catch(err){
        res.send(500).send(err.message);
    }
});

//  ----------------------one product ---------------------

router.get("/:id",async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.json(product);
      
    }catch(err){
        res.send(500).send(err.message);
    }
});

//------------------------ want to get update product-----------------

router.patch("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(product);

    } catch (err) {
        res.send(err.message);
    }
});

// ------------------------------delete ------------------------------

router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.send("Product deleted successfully");

    } catch (err) {
        res.status(500).send(err.message);
    }
});
module.exports = router;