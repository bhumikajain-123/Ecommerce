const Category = require("../../models/Category");

//   ----------------add category ---------------------------
const addCategory = async (req,res) =>{
    try{
    const category = new Category({
        name : req.body.name,
        description : req.body.description,
    

    });
    await category.save();
    

    res.send("cateogory added");
}catch(err){
    res.status(500).send(err.message);
}
}

//  ---------------get all category data --------------------

const getCategory = async (req,res) =>{

     try{

        const category = await Category.find();
        res.json(category);
    }catch(err){
        res.status(500).send(err.message);
    }
}
//  --------------------get category by id --------------------

const getIdCategory = async (req,res) =>{

    try{
    const id = req.params.id;
    const category = await Category.findById(id);
    res.json(category);

}catch(err){
    res.status(500).send(err.message);
}
   
}

//  ----------------update category -------------------------

const updateCategory = async (req,res) =>{
     try {
        const id = req.params.id;

        const { name, description } = req.body;

        const category = await Category.findByIdAndUpdate(
            id,
            {
                name,
                description
            },
            {
                new: true
            }
        );

        if (!category) {
            return res.status(404).send("Category not found");
        }

        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            category
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteCategory = async (req,res) =>{
      try {
        const id = req.params.id;

        const category = await Category.findByIdAndDelete(id);

        if (!category) {
            return res.status(404).send("Category not found");
        }

        res.status(200).json({
            success: true,
            message: "Category deleted successfully",
            category
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports = {addCategory,getCategory,getIdCategory,updateCategory,deleteCategory};