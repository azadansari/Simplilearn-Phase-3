//load the module and create the reference of module
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017"

let myDb = "meanbatch3";

mongoClient.connect(url, (err, client) => {
    if (!err) {
        console.log("Database Connected Successfully");

        let db = client.db(myDb);
        db.collection("Employee").updateOne({ _id: 105 }, { $set: { age: 28 } }, (err1, res) => {
            if (!err1) {
                // console.log("Record update");
                // console.log(res);
                if (res.modifiedCount > 0 || res.matchedCount > 0) {
                    console.log("Record updated");
                } else {
                    console.log("Record not present");
                }
            }
            else {
                console.log(err1);
            }
            client.close();
        })        
    } else {
        console.log(err);
    }
})