let mongoose = require("mongoose");
mongoose.pluralize(null);  // to avoid to plural

//define the schema
// schema is use to create the structure for the collection
let customerSchema = mongoose.Schema({
    _id:Number,
    cname:String,
    cage:Number
});

// using schema we have to create the model
// 1st parameter collection name,
// 2nd parameter collection schema definition
let customerModel = mongoose.model("Customer",customerSchema);
// by default collection name is customers in place of Customer, as plural in lower case to fix we use
//mongoose.pluralize(null);

module.exports=customerModel;