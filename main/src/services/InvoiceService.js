const mongoose = require("mongoose");
const CartModel = require("../models/CartModel");
const ProfileModel = require("../models/ProfileModel");
const ObjectId = mongoose.Types.ObjectId;

const CalculateInvoice = async (req)=>{
    try{

        // Invoice Calculation
       let user_id=new ObjectId(req.headers.id);

       let data=await CartModel.aggregate([
            {$match: {userID:user_id}},
            {$group: {_id: 0, sum: {$sum: {$toDecimal: "$price"}}}}
        ]);

        let payable=data[0].sum;
        let tran_id=Math.floor(100000000 + Math.random() * 900000000);
        let val_id=0;
        let delivery_status="pending";
        let payment_status="pending";

        let Profile=await ProfileModel.aggregate([
            {$match: {userID:user_id}},
        ]);

        // Customer Shipping Details
        let cus_details=`Name: ${Profile[0].cus_name}, Email: ${Profile[0].cus_email}, Address: ${Profile[0].cus_add}, Phone: ${Profile[0].cus_phone}`
        let ship_details=`Name: ${Profile[0].ship_name}, City: ${Profile[0].ship_city}, Address: ${Profile[0].ship_add}, Phone: ${Profile[0].ship_phone}`


        // Pending Payment Invoice Create




        // Invoice Product List Insert




        // SSL Commerce Payment Gateway Call - Get Payment URL



        return {status:"success", message:Customer}
    }
    catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}




module.exports = {CalculateInvoice};