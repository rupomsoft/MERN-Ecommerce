const mongoose =require('mongoose');

const DataSchema=mongoose.Schema({
        title:{type:String,required:true},
        des:{type:String,required:true},
        price:{type:String,required:true},
        image:{type:String,required:true},
        productID:{type:mongoose.Schema.Types.ObjectId,required:true},
    },
    {timestamps:true,versionKey:false}
)

const ProductSliderModel=mongoose.model('productsliders',DataSchema);
module.exports=ProductSliderModel;