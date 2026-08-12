const Product = require("../../models/Product");
const Category = require("../../models/Category");

//--------------filter product by category id -----------------

const getProductCategory = async (req,res) =>{
     try{
           const category = await Category.findById(req.params.id);
            if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }
           const products = await Product.find({
            category: category._id
        }).populate("category");
        res.json({message : "category data",
            products
        });
    }catch(err){
        res.json(err.message);
    }
}


//   ----------------add product ---------------------------
const addProduct = async (req, res) => {
    try {
        const { category, name, description, price, stock, image } = req.body;

        const product = new Product({
            category,
            name,
            description,
            price,
            stock,
            image
        });

        await product.save();

        res.json({ message: "Product added successfully" });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//  ---------------get all product data --------------------

const getProduct = async (req,res) =>{

     try{

        const product = await Product.find().populate("category");
        res.json(product);
    }catch(err){
        res.status(500).json(err.message);
    }
}
//  --------------------get product by id --------------------

const getIdProduct = async (req,res) =>{

    try{
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);

}catch(err){
    res.status(500).json(err.message);
}
   
}

//  ----------------update product -------------------------

const updateProduct = async (req,res) =>{
     try {
        const id = req.params.id;

        const { name, description } = req.body;

        const product = await Product.findByIdAndUpdate(
            id,
            {
                name,
                description
            },
            {
                new: true
            }
        );

        if (!product) {
            return res.status(404).json("Product not found");
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteProduct = async (req,res) =>{
      try {
        const id = req.params.id;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json("Product not found");
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            product
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports = {addProduct,getProduct,getIdProduct,updateProduct,deleteProduct,getProductCategory};