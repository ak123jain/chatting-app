import e from "express";
import mongoose from "mongoose";

const usermodel = new mongoose.Schema({
    fullname :{
        type : String,
        required : true
    },
    username :{
        type : String,
        required : true,
        unique : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    profilepic :{
        type : String,
        required : true,
    },
    gender:{
        type:String,
        enum:["male", "female"],
        required:true
    },
} , {timestamps : true})

export const User = mongoose.model("User", usermodel)