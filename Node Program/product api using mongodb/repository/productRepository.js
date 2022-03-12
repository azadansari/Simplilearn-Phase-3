let dbCollection = require("../config/dbConfig");

exports.findAllProduct = ()=>{
    // let product = dbCollection.getCollection("product");
    // return product.find({});
    return dbCollection.getCollection("Product").find().toArray();
}

