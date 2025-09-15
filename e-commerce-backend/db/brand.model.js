const mongoose=require("mongoose");
const brandSchema=new mongoose.Schema({
    name:String
});


const brandModel= mongoose.model("brands",brandSchema);
module.exports=brandModel;