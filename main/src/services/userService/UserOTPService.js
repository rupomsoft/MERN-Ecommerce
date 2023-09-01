const UserOTPService = async (code,email,DataModel)=>{
    await DataModel.updateOne(
        {email:email}, {$set:{otp:code}}, {upsert:true}
    )
}

module.exports = UserOTPService;