const mongoose=require("mongoose");
const wishListSchema=new mongoose.wishListSchema({
    userId:{type:Schema.Types.ObjectId, ref:"users"},
    productIds:Array(String)
})

const wishListModel=mongoose.model("wishLists",wishListSchema);
module.exports=wishListModel;