import mongoose from "mongoose";

const conversationmodel = new mongoose.Schema({
    participants :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    messege:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Messege"
        }
    ]
})

export const Conversation = mongoose.model("Conversation", conversationmodel)