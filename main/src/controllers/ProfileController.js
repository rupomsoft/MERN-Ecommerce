exports.CreateProfile=async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"UserLogin"
    })
}

exports.ReadProfile=async (req,res)=>{
    let email= req.headers.email
    return res.status(200).json({
        success:true,
        message:email
    })
}

exports.UpdateProfile=async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"UserLogin"
    })
}