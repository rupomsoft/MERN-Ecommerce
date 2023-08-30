exports.UserLogin=async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"UserLogin"
    })
}

exports.VerifyLogin=async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"VerifyLogin"
    })
}

exports.UserLogout=async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"UserLogout"
    })
}





