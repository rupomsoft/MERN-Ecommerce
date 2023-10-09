const mongoose =require('mongoose');

const DataSchema=mongoose.Schema({
    name:{type:String,trim:true,required:true},
    description:{type:String,trim:true,required:true},
    img:{type:String,trim:true,required:true},
},
    {timestamps:true,versionKey:false}
)

const FeaturesModel=mongoose.model('features',DataSchema);
module.exports=FeaturesModel;


