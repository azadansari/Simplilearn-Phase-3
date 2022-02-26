// load all the modules
let express = require("express");
const { json } = require("express/lib/response");
const res = require("express/lib/response");
let fs = require("fs");
let cors = require("cors");

// create the reference of express module
let app = express();


// middleware
app.use(express.json());   // to enable post data
app.use(cors());            // to enable post feature

// now we will create the
let products = []

//http://localhost:9090/productDetails
app.get("/productDetails",(req,res)=>{
    let productInfo = JSON.parse(fs.readFileSync("products.json"));
    res.json(productInfo);
})

/*
"pid":100,
"pname":"TV",
"price":85000,
"url":"https://e7.pngegg.com/pngimages/616/971/png-clipart-led-backlit-lcd-television-set-casa-gadea-smart-tv-tv-smart-television-display-advertising-thumbnail.png"
*/
//http://localhost:9090/productStore
app.post("/productStore",(req,res)=>{
    let product = req.body;
    products = JSON.parse(fs.readFileSync("products.json"));
    let result = products.find(p=>p.id==product.pid);
    if(result==undefined){
        products.push(product);
        fs.writeFileSync("products.json",JSON.stringify(products));
        res.send("Record Stored Successfully...");
    }else{
        res.send("Product exist Add Different product");
    }
})

//http://localhost:9090/findProductById/1000
app.get("/findProductById/:pid",(req,res)=>{
    let pid = req.params.pid;
    products = JSON.parse(fs.readFileSync("products.json"));
    let result = products.find(p=>p.pid==pid);
    if(result==undefined){
        res.json({"msg":`Record not present with id as ${pid}`});
    }else{
        res.json(result);
    }
})


//http://localhost:9090/deleteProductInfo/1000
app.delete("/deleteProductInfo/:pid",(req,res)=>{
    let pid = req.params.pid;
    products = JSON.parse(fs.readFileSync("products.json"));
    let index = products.findIndex(p=>p.pid==pid);
    if(index<0){
        res.send("product not present with pid as " +pid);
    }else{
        products.splice(index,1);
        fs.writeFileSync("products.json",JSON.stringify(products));
        res.send( pid+" product Deleted Successfully");
    }
})

//http://localhost:9090/updateProductsDetails
app.patch("/updateProductsDetails",(req,res)=>{
    let product = req.body;      // Update price and url using pid
    products = JSON.parse(fs.readFileSync("products.json"));
    let index = products.findIndex(p=>p.pid==product.pid);   //if record present it return that product index position else it return deleted

    if(index<0){
        res.send("products not present with pid as "+product.pid);
    }else{
        products[index].price=product.price;
        products[index].url=product.url
        fs.writeFileSync("products.json",JSON.stringify(products));
        res.send("products updated successfully");
    }
})


app.listen(9090,()=>console.log("Server running on port number 9090"));