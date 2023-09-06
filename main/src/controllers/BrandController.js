const {AllBrands} = require("../services/ProductService");
exports.BrandList=async (req,res)=>{
    let result=await AllBrands();
    return res.status(200).json(result)
}