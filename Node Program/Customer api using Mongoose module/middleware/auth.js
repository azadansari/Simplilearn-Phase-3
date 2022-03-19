let jwt = require("jsonwebtoken");

let verifyToken = async (req,res,next)=>{

    let token = req.headers.authorization;
    if(!token){
        return res.send("Access denied / UnAuthorized user")
    }
    // else{
    //     return res.send("Processing we will check valid token")
    // }

    try{
        let verifyTokenValue = await jwt.verify(token,"my-key");
        if(!verifyTokenValue){
            res.send("UnAuthorized User!");
        }
        req.role = verifyTokenValue;
        next();   // if valid token present go to next step.
    }catch(Ex){
        res.send(Ex);
    }
}

let isUser = async(req,res,next)=>{
    if(req.role.user.user_type=="user"){
        console.log("Normal user")
        next();
    }else{
        res.send("Authorized User, you can't access this resources");
    }
}


let isAdmin = async(req,res,next)=>{
    if(req.role.user.user_type=="admin"){
        console.log("Admin")
        next();
    }else{
        res.send("An Authorized User, you can't access this resources");
    }
}

module.exports={verifyToken,isAdmin,isUser}