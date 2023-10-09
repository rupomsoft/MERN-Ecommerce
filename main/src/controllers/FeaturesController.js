const {AllBrands} = require("../services/ProductService");
exports.FeatureList=async (req,res)=>{
    let result=await AllBrands();
    return res.status(200).json(result)
}