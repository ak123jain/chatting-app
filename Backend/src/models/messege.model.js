import mongoose from "mongoose";

const messegemodel = new mongoose.Schema({
    senderId :{
        type :  mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    receiverId :{
        type :  mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    message :{
        type : String,
        required : true
    },
} , {timestamps : true})

export const Messege = mongoose.model("Messege", messegemodel)