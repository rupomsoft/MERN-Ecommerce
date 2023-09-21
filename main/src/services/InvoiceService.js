const mongoose = require("mongoose");
const CartModel = require("../models/CartModel");
const ProfileModel = require("../models/ProfileModel");
const InvoiceModel = require("../models/InvoiceModel");
const PaymentSettingModel = require("../models/PaymentSettingModel");
const ObjectId = mongoose.Types.ObjectId;

const FormData = require('form-data');
const axios = require("axios");

const CalculateInvoice = async (req)=>{
    try{

        // Invoice Calculation
       let user_id=new ObjectId(req.headers.id);
       let cus_email=req.headers.email;


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
        await InvoiceModel.create({
            userID: user_id,
            payable: payable,
            cus_details:cus_details,
            ship_details:ship_details,
            tran_id:tran_id,
            val_id:val_id,
            delivery_status:delivery_status,
            payment_status:payment_status
        })

        // Invoice Product List Insert




        // SSL Commerce Payment Gateway Call - Get Payment URL

        // 1 Payment Settings

       // let  PaymentSetting= await PaymentSettingModel.find();

        const form = new FormData();
        form.append('store_id', 'teamr64c9e84055219');
        form.append('store_passwd', 'teamr64c9e84055219@ssl');
        form.append('total_amount', payable.toString());
        form.append('currency', 'BDT');
        form.append('tran_id', tran_id);
        form.append('success_url', 'www.ostad.com');
        form.append('fail_url', 'www.ostad.com');
        form.append('cancel_url', 'www.ostad.com');
        form.append('ipn_url', 'www.ostad.com');

        form.append('cus_name', Profile[0].cus_name);
        form.append('cus_email', cus_email);
        form.append('cus_add1', Profile[0].cus_add);
        form.append('cus_add2', Profile[0].cus_add);
        form.append('cus_city', Profile[0].cus_city);
        form.append('cus_state', Profile[0].cus_state);
        form.append('cus_postcode', Profile[0].cus_postcode);
        form.append('cus_country', Profile[0].cus_country);
        form.append('cus_phone', Profile[0].cus_phone);
        form.append('cus_fax', Profile[0].cus_phone);

        form.append('shipping_method', 'YES');
        form.append('ship_name', Profile[0].ship_name);
        form.append('ship_add1', Profile[0].ship_add);
        form.append('ship_add2', Profile[0].ship_add);
        form.append('ship_city', Profile[0].ship_city);
        form.append('ship_state', Profile[0].ship_state);
        form.append('ship_country', Profile[0].ship_country);
        form.append('ship_postcode', Profile[0].ship_postcode);
        form.append('product_name', 'product_name');
        form.append('product_category', 'category');
        form.append('product_profile', 'profile');
        form.append('product_amount', '3');


        let SSLRes=await axios.post("https://sandbox.sslcommerz.com/gwprocess/v4/api.php",form)



        return {status:"success", message:SSLRes.data}
    }
    catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}




module.exports = {CalculateInvoice};