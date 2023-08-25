const mongoose =require('mongoose');

const DataSchema=mongoose.Schema({
    brandName:{type:String,trim:true,required:true,unique:true},
    brandImg:{type:String,trim:true,required:true},
},
    {timestamps:true,versionKey:false}
)

const BrandModel=mongoose.model('brands',DataSchema);
module.exports=BrandModel;


