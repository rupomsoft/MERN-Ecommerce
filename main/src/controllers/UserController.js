const {UserOTP,UserVerify} = require("../services/UserService");

exports.UserLogin=async (req,res)=>{
    let result=  await UserOTP(req)
    return res.status(200).json(result)
}

exports.VerifyLogin=async (req,res)=>{
    let result=  await UserVerify(req)
    return res.status(200).json(result)
}



