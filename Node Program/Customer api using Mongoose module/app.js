
let express = require("express");
let db = require("./config/dbConfig");
let customerRouter = require("./router/customerRouter");
let userRouter = require("./router/userRouter");
let app = express();
const port = process.env.PORT || 9090;
db.dbConnection;      // connect the database 
app.use(express.json());



app.use("/api/customer",customerRouter);
app.use("/api/user",userRouter);



app.listen(port,()=>console.log(`Application running on port number ${port}`));