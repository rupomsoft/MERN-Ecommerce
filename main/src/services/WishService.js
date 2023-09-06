const UserModel = require("../models/UserModel");



const CreateWish = async (req)=>{
    try{
        let user_id=req.headers.id;
        let reqBody=req.body;
        reqBody.userID = user_id;


        return {status:"success", message:"6 Digit OTP has been send"}
    }
    catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}

module.exports = {CreateWish};