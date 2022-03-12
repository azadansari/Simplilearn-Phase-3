let express = require("express");
let dbConnection = require("./config/dbConfig");
let productRouter = require("./router/productRouter");
let app = express();

dbConnection.connect();  //connect the database....

//middleware
//http://localhost:9090/api/product
//http://localhost:9090/api/product/findProduct

app.use("/api/product",productRouter);


app.listen(9090,()=>console.log("Server running on port number 9090"));