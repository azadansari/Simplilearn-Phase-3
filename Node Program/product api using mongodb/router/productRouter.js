let express = require("express");
let router = express.Router();     // it is to create the router reference.

let productController = require("../controller/productController");

router.get("/findProduct",productController.findAllProduct);

module.exports=router;