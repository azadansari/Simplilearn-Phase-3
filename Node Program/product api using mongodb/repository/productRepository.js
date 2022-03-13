let dbCollection = require("../config/dbConfig");

exports.findAllProduct = ()=>{
    // let product = dbCollection.getCollection("product");
    // return product.find({});
    return dbCollection.getCollection("Product").find().toArray();
}

exports.storeProduct = (product)=>{
    return dbCollection.getCollection("Product").insertOne(product);
}

exports.deleteProductById = (pid)=> {
    let tempId = eval(pid);
    return dbCollection.getCollection("Product").deleteOne({_id:tempId});
}

exports.updateProductPrice = (product)=> {
    return dbCollection.getCollection("Product").updateOne({_id:product._id},{$set:{price:product.price}});
}

