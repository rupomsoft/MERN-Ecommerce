const mongoose =require('mongoose');

const DataSchema=mongoose.Schema({
        title:{type:String,trim:true,required:true},
        shortDes:{type:String,trim:true,required:true},
        price:{type:String,trim:true,required:true},
        discount:{type:Boolean,trim:true,default: false},
        discountPrice:{type:String,trim:true},
        image:{type:String,trim:true,required:true},
        star:{type:String,trim:true,required:true},
        stock:{type:Boolean,trim:true,required:true,default:true},
        remark:{type:String,trim:true,required:true,enum:['new','trending','popular','top','special','regular']},
        categoryID:{type:mongoose.Schema.Types.ObjectId,required:true},
        brandID:{type:mongoose.Schema.Types.ObjectId,required:true},
    },
    {timestamps:true,versionKey:false}
)

const ProductModel=mongoose.model('products',DataSchema);
module.exports=ProductModel;
