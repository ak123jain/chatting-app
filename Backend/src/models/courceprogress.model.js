import mongoose from "mongoose";

const courceprogressSchema = new mongoose.Schema({
    courceId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Cource",
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    lectureprogress: [
        {
            lectureId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Lecture",
                required: true
            },
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            viewed: {
                type: Boolean,
                default: false
            }
        }
    ]
,    
    complete :{
        type : Boolean,
        default : false
    },
     
},{timestamps : true})

export const Courceprogress = mongoose.model("Courceprogress", courceprogressSchema);