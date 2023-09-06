const {ProductBYRemark,ProductBYCategory, ProductBYBrand,ProductBYCategoryLimit10, ProductBYSlider, ProductBYKeyword} = require("../services/ProductService");
const {CreateWish} = require("../services/WishService");

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

}


exports.ListByRemark=async (req,res)=>{
    let result=await  ProductBYRemark(req)
    return res.status(200).json(result)
}



exports.WishList=async (req,res)=>{

}

exports.CreateWishList=async (req,res)=>{
    let result=await CreateWish(req)
    return res.status(200).json(result)
}

exports.RemoveWishList=async (req,res)=>{


}






exports.CartList=async (req,res)=>{

}

exports.CreateCartList=async (req,res)=>{

}

exports.RemoveCartList=async (req,res)=>{

}


