const express=require("express");
const mongoose= require("mongoose");
const app=express();
const cors=require("cors");
const categoryRoutes=require("./routes/category.route")
const brandRoutes=require("./routes/brand.route")

app.use(express.json());
app.use(cors());

app.get('/',(request,response)=>{
    response.send("Server Running Successfully");
})

app.use("/category",categoryRoutes);
app.use("/brand",brandRoutes);

async function connectDB(){
    await mongoose.connect("mongodb://localhost:27017/",{
        dbName:"e-commerce-store-db"
    })
    console.log("mongodb connected")
}

connectDB().catch((error)=>{
    console.log(error);
});


port=2000;
app.listen(port, ()=>{
    console.log(`Server available on : ${port}`);
})
