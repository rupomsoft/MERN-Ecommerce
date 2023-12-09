const {AllCategories} = require("../services/ProductService");
exports.CategoryList=async (req,res)=>{
   let result=await AllCategories();
   return res.status(200).json(result)
}