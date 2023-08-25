const mongoose =require('mongoose');
const DataSchema=mongoose.Schema({
        email:{type:String,lowercase:true,required:true,unique:true},
        otp:{type:String,required:true},
    },
    {timestamps:true,versionKey:false}
)
const UserModel=mongoose.model('users',DataSchema);
module.exports=UserModel;