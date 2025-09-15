const BrandModel=require("../db/brand.model");

async function getBrands(){
    let brands=await BrandModel.find();
    return brands.map((b)=>b.toObject());
}

async function getBrandById(id){
    let brand=await BrandModel.findById(id);
    return brand.toObject();
} 

function addBrand(model){
    let brand = new BrandModel({name:model.name});
    brand.save();
    return brand.toObject();
}

async function updateBrand(id,model){
    await BrandModel.findByIdAndUpdate(id,model);
}

async function deleteBrand(id){
    await BrandModel.findByIdAndDelete(id);
}

module.exports={getBrands,getBrandById,addBrand,updateBrand,deleteBrand}
