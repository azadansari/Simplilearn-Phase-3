//load the module and create the reference of module
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017"

let myDb = "meanbatch3";

mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("Database Connected Successfully");
        
        let db = client.db(myDb);
        // let cursor = db.collection("Employee").find({});
        // let cursor = db.collection("Employee").find({_id:105});
        let cursor = db.collection("Employee").find({city:"Bangalore"});
        cursor.forEach(e=>{
            // console.log("Name "+e.name+" age "+e.age);
            console.log(e);
            client.close();
        })
    }else{
        console.log(err);
    }
})