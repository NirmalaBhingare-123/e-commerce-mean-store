const mongoose=require("mongoose")
const orderSchema=new mongoose.Schema({
    date:Date,
    items:Array(any),
    status:Number
})

const orderModel=mongoose.model("orders",orderSchema);
module.exports=orderModel;