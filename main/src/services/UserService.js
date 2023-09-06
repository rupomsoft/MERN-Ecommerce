const UserModel = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");
const SendEmailUtility = require("../utility/SendEmail");
const {EncodeToken} = require("../utility/TokenHelper");

const UserOTP = async (req)=>{
    try{
        let email=req.params.email;
        let code=Math.floor(100000 + Math.random() * 900000);
        let EmailText="Your verification code is "+code;
        await SendEmailUtility(email,EmailText,"PIN Email Verification");
        await UserModel.updateOne({email:email}, {$set:{otp:code}}, {upsert:true})
        return {status:"success", message:"6 Digit OTP has been send"}
    }
    catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}


const UserVerify = async (req)=>{
    try{
        let email=req.params.email;
        let code=req.params.otp;
        if(code==="0"){
            return {status:"fail", message:"Something Went Wrong"}
        }
        else {
            let total=await UserModel.find({email: email, otp: code}).count('total');
            if(total===1){
                let user_id=await UserModel.find({email: email, otp: code}).select('_id')
                let token= EncodeToken(email,user_id[0]['_id'].toString())
                return {status:"success", message:"Valid OTP", token:token}
            }else{
                return {status:"fail", message:"Something Went Wrong"}
            }
        }
    }
    catch (e) {
        return {status:"fail", data:"Something Went Wrong"}
    }
}


const UserProfileSave = async (req)=>{
    let user_id=req.headers.id;
    let reqBody=req.body;
    reqBody.userID = user_id;
    try{
        await ProfileModel.updateOne({userID: user_id}, {$set:reqBody}, {upsert:true})
        return {status:"success", message:"Profile Save Changed"}
    }
    catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}

const UserProfileDetails = async (req)=>{
    let user_id=req.headers.id;
    try{
        let data=await ProfileModel.find({userID: user_id})
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:"Something Went Wrong"}
    }
}

module.exports = {UserOTP,UserVerify,UserProfileSave,UserProfileDetails};