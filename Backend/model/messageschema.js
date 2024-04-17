import mongoose from "mongoose";
import validator from "validator";  

const messageschema =new mongoose.Schema({
    firstName:{
       type:string,
       required:true,
       minLength:[3,"FIRST NAME CONTAIN at leat 3 character!"]
    },
    lastName:{
        type:string,
        required:true,
        minLength:[3,"LAST NAME CONTAIN at leat 3 character!"]     
    },
    email:{
        type:string,
        required:true,
        validate:[validator.isEmail,"Please provide a valid email"],
    },
    phone:{
        type:Number,
        required:true,
        minLength:[11,"Phone number contain at exact 11 Digit"],
        maxLength:[11,"Phone number contain at exact 11 Digit"],
    },
    message:{
        type:string,
        required:true,
        minLength:[10,"message at least contain 10 character"] 
    }


})