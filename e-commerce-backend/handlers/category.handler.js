const categoryModel = require("../db/category.model");

async function addCategory(model){
 let category=new categoryModel({
    name:model.name
   });
   category.save();
   return category.toObject();
}

async function updateCategory(id,model){
   await categoryModel.findOneAndUpdate({_id:id},model);
   return;
}

async function getCategory(){
   const categories=await categoryModel.find();
   return categories.map((c)=>c.toObject());
}

async function getCategoryById(id){
   const category=await categoryModel.findById(id);
   return category.toObject();
}

async function deleteCategory(id){
  await categoryModel.findByIdAndDelete(id);
  return;
}

module.exports= {addCategory, updateCategory,deleteCategory,getCategory,getCategoryById}