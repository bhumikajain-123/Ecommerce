const mongoose =  require("../config/db");

const productSchema = new mongoose.Schema({

 categoryId : {
   type : mongoose.Schema.Types.ObjectId,
   ref : "Category",
   required : true

 },

 name : {
    type : String,
    required : true
 },
 description : {
    type : String,
    required : true

 },
 price : {
    type : Number,
    required : true
 },
 stock : {
    type : Number,
    required : true,
    min : 0
 },
 image : {
    type : String,
    required : true
 },

 createdAt : {
    type : Date,
    default : Date.now
 },
 updatedAt : {
    type : Date,
    default : Date.now
 }

});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;
