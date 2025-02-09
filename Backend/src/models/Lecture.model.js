import mongoose from "mongoose";

const LectureSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
     duration:{
        type :  Number,
        required : true
     },
    cource : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Cource",
        required : true
    },
    videourl : {
        type : String,
        required : true
    },
    createdAt :{
        type : Date,
        default : Date.now
    },
    lecturethubnail :{
        type : String,
        required : true
    }

} , {timestamps : true});

export const Lecture = mongoose.model("Lecture" , LectureSchema);