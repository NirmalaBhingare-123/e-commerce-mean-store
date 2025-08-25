const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    name:String,
    shortDescription:String,
    descriptiion:String,
    purchasePrice:Number,
    sellingPrice:Number,
    images:Array(String),
    categoryId:{type:Schema.Types.ObjectId,ref:"categories"}
});

const productModel=mongoose.model("products",productSchema);
module.exports=productModel;
