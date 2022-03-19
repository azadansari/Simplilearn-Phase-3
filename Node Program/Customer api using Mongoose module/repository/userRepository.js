let userModel = require("../model/userModel");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

let signUpUser = async(user)=> {
    let salt = await bcrypt.genSalt(10);
    let hashPassword  = await bcrypt.hash(user.password,salt);
    let userRef = new userModel({
         email : user.email,
         password : hashPassword,
         name:user.name,
         user_type:user.user_type      
    })
    return userModel.insertMany(userRef);
}

let signIn = async (user)=>{
    //check email id
    let result = await userModel.findOne({email:user.email});
    if(result==null){
        return "Email Id is wrong";
    }
    
    //check valid password
    let validpassword = await bcrypt.compare(user.password,result.password);
    if(!validpassword){
        return "Invalid Password";
    }
    // else{
    //     return "processing...";
    // }

    // generate the token using payload data.
    let payload = {id:result._id,email:result.email,user_type:result.user_type}
    let token = await jwt.sign(payload,"my-key");
    return token;
}
module.exports={signUpUser,signIn};