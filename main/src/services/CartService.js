
const mongoose = require("mongoose");
const ProductModel = require("../models/ProductModel");
const CartModel = require("../models/CartModel");
const ObjectId = mongoose.Types.ObjectId;

const CreateCart = async (req)=>{
    try{
        let user_id=req.headers.id;
        let reqBody=req.body;
        let productID=reqBody.productID;

        // Price Calculation
        let product= await ProductModel.findOne({_id:productID});
        let price=product.price;
        if(product.discount){
            price=product.discountPrice;
        }
        let totalPrice=price*reqBody.qty;


        reqBody.userID = user_id;
        reqBody.price = totalPrice;


        await  CartModel.updateOne({userID: user_id, productID: reqBody.productID}, {$set:reqBody}, {upsert:true})
        return {status:"success", message:"Cart List Created"}
    }
    catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}


const RemoveCart = async (req)=>{
    try{
        let user_id=req.headers.id;
        let reqBody=req.body;// Product ID
        reqBody.userID = user_id;
        await  CartModel.deleteOne({userID: user_id, productID: reqBody.productID})
        return {status:"success", message:"Cart Item Deleted"}
    }
    catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}


const Cart = async (req)=>{
    try{

        let user_id=new ObjectId(req.headers.id);

        let matchStage= {$match: {userID:user_id}}
        let JoinStageProduct={$lookup: {from: "products", localField: "productID", foreignField: "_id", as: "product"}};
        let unwindProductStage={$unwind: "$product"}

        let JoinStageBrand={$lookup: {from: "brands", localField: "product.brandID", foreignField: "_id", as: "brand"}};
        let unwindBrandStage={$unwind: "$brand"}

        let JoinStageCategory={$lookup: {from: "categories", localField: "product.categoryID", foreignField: "_id", as: "category"}};
        let unwindCategoryStage={$unwind: "$category"}

        let projectionStage= {$project: {'_id': 0,
                'userID': 0, 'createdAt':0,
                'updatedAt':0,'product._id':0,
                'product.categoryID':0,'product.brandID':0,
                'brand._id':0,'category._id':0,
        }}

        let data= await CartModel.aggregate([
            matchStage,
            JoinStageProduct,
            unwindProductStage,
            JoinStageBrand,
            unwindBrandStage,
            JoinStageCategory,
            unwindCategoryStage,
            projectionStage
        ])

        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}




module.exports = {CreateCart,RemoveCart,Cart};