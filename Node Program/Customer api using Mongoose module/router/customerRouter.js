let express = require("express");
// const { route } = require("express/lib/application");
let router = express.Router();
let customerController = require("../controller/customerController");
let auth = require("../middleware/auth");

// router.post("/storeCustomerInfo",customerController.storeCustomerInfo);
// router.put("/updateCustomerAge",customerController.updateCustomerAge);
// router.delete("/deleteCustomerInfo/:_id",customerController.deleteCustomerInfo);
// router.get("/findAllCustomer",customerController.findAllCustomer);

// normal User can do only one operation
router.get("/findAllCustomer",auth.verifyToken,auth.isUser,customerController.findAllCustomer);

// normal User can do only one operation
router.get("/findAllCustomer",auth.verifyToken,auth.isAdmin,customerController.findAllCustomer);
router.post("/storeCustomerinfo",auth.verifyToken,auth.isAdmin,customerController.storeCustomerInfo);

module.exports=router;