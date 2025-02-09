import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    lectureId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Lecture",
        required : true
    },
    viewed : {
        type : Boolean,
        default : false
    },
    complete :{
        type : Boolean,
        default : false
    }
    ,cource :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Cource",
        required : true
    },
    
},{timestamps : true})

export const Lecture = mongoose.model("Lecture", lectureSchema);