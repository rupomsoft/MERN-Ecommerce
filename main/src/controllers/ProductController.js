const {ProductBYRemark,ProductBYCategory,DetailsBYID, ProductBYBrand,ProductBYCategoryLimit10, ProductBYSlider, ProductBYKeyword} = require("../services/ProductService");
const {CreateWish,RemoveWish,Wish} = require("../services/WishService");
const {CreateCart, Cart,RemoveCart} = require("../services/CartService");

exports.SliderList=async (req,res)=>{
    let result=await  ProductBYSlider(req)
    return res.status(200).json(result)
}

exports.ListByCategory=async (req,res)=>{
    let result=await  ProductBYCategory(req)
    return res.status(200).json(result)
}

exports.ListBySmilier=async (req,res)=>{
    let result=await  ProductBYCategoryLimit10(req)
    return res.status(200).json(result)
}

exports.ListByBrand=async (req,res)=>{
    let result=await  ProductBYBrand(req)
    return res.status(200).json(result)
}

exports.ListByKeyword=async (req,res)=>{
    let result=await  ProductBYKeyword(req)
    return res.status(200).json(result)
}


exports.ListReview=async (req,res)=>{

}


exports.ProductDetails=async (req,res)=>{
    let result=await  DetailsBYID(req)
    return res.status(200).json(result)
}


exports.ListByRemark=async (req,res)=>{
    let result=await  ProductBYRemark(req)
    return res.status(200).json(result)
}



exports.WishList=async (req,res)=>{
    let result=await Wish(req)
    return res.status(200).json(result)
}

exports.CreateWishList=async (req,res)=>{
    let result=await CreateWish(req)
    return res.status(200).json(result)
}

exports.RemoveWishList=async (req,res)=>{
    let result=await RemoveWish(req)
    return res.status(200).json(result)

}






exports.CartList=async (req,res)=>{
    let result=await Cart(req)
    return res.status(200).json(result)
}

exports.CreateCartList=async (req,res)=>{
    let result=await CreateCart(req)
    return res.status(200).json(result)
}

exports.RemoveCartList=async (req,res)=>{
    let result=await RemoveCart(req)
    return res.status(200).json(result)
}


