const express=require("express");
const router=express.Router();
const categoryModel = require("../db/category.model");

router.post("",(req,res)=>{
   let category=new categoryModel({
    name:req.body.name
   });
   category.save();
   return category.toObject();
});

module.exports=router;
