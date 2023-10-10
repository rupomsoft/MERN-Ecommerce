const express =require('express');
const router =require('./src/routes/api');
const app= new express();

const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');


const mongoose =require('mongoose');

/*
let URL="mongodb://127.0.0.1:27017/ecom4?retryWrites=true&w=majority"

mongoose.connect(URL).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})
*/

let URL="mongodb+srv://<username>:<password>@cluster0.7uslu.mongodb.net/ecom4?retryWrites=true&w=majority";
let option={user:'testuser7777',pass:"testuser7777",autoIndex:true};
mongoose.connect(URL,option).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})



app.use(cookieParser());
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)


app.use("/api/v1",router)


app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})

module.exports=app;