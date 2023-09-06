const mongoose =require('mongoose');
const DataSchema=mongoose.Schema({

        userID:{type:mongoose.Schema.Types.ObjectId,required:true},

        cus_name:{type:String,trim:true,required:true},
        cus_add:{type:String,trim:true,required:true},
        cus_city:{type:String,trim:true,required:true},
        cus_state:{type:String,trim:true,required:true,default:'Dhaka'},
        cus_postcode:{type:String,trim:true,required:true,default:'1200'},
        cus_country:{type:String,trim:true,required:true,default:'Bangladesh'},
        cus_phone:{type:String,trim:true,required:true},
        cus_fax:{type:String,trim:true,required:true,default:"0000"},

        ship_name:{type:String,trim:true,required:true},
        ship_add:{type:String,trim:true,required:true},
        ship_city:{type:String,trim:true,required:true},
        ship_state:{type:String,trim:true,required:true,default:'Dhaka'},
        ship_postcode:{type:String,trim:true,required:true,default:'1200'},
        ship_country:{type:String,trim:true,required:true,default:'Bangladesh'},
        ship_phone:{type:String,trim:true,required:true},

    },
    {timestamps:true,versionKey:false}
)
const ProfileModel=mongoose.model('profiles',DataSchema);
module.exports=ProfileModel;