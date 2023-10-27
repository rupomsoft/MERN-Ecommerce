const {UserOTP,UserVerify} = require("../services/UserService");

exports.UserLogin=async (req,res)=>{
    let result=  await UserOTP(req)
    return res.status(200).json(result)
}

exports.VerifyLogin=async (req,res)=>{
    let result=  await UserVerify(req);
    if(result['status']==="success"){

        let cookieOption={
            expires  : new Date(Date.now()+24*60*60*1000),
            httpOnly : false
        }

        res.cookie('token', result['token'],cookieOption)
        return res.status(200).json(result)
    }
    else{
        return res.status(200).json(result)
    }
}


exports.UserLogout=async (req,res)=>{
    let cookieOption={
        expires  : new Date(Date.now()-24*60*60*1000),
        httpOnly : false
    }
    res.cookie('token', "",cookieOption);
    return res.status(200).json({status:"success"})
}




