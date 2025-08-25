const mongoose=require("mongoose");
const cartSchema=new mongoose.Schema({
   userId:{type:Schema.Types.ObjectId,ref:"users"},
   productIds:Array(String)
});

const cartModel=mongoose.model("carts",cartSchema);
module.exports=cartModel;
