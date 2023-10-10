const {AllFeatures} = require("../services/ProductService");
exports.FeatureList=async (req,res)=>{
    let result=await AllFeatures();
    return res.status(200).json(result)
}