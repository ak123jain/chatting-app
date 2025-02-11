import mongoose from "mongoose";

const createorder = new mongoose.Schema({
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    orderId :{
        type : String,
        required : true,
        unique : true  // razopay order id
    },
    amount :{
        type : Number,
        required : true
    },
    currency :{
        type : String,
        required : true,
        default : "INR"                                      
    },
    courceId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Cource",
    },
    receipt_id:{
        type : String,
        required : true
    },
    paymentId :{
        type : String,
    },
    cource:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Cource",
    },
    status:{
        type : String,
        enum :["pending" , "success" , "failed"],
    },
    createdAt:{
        type : Date,
        default : Date.now
    }
} , {timestamps : true})


export const Order = mongoose.model("Order" , createorder)