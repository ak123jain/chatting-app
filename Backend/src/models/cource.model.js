import mongoose from 'mongoose';

const courcemodel = new mongoose.Schema(
  {
    courcetitle: {
      type: String,
      required: true,
    },
    courcedescription: {
      type: String,
      required: true,
    },
    courcelevel :{
        type: String,
        required: true,
        enum : ["Beginner", "Intermediate", "Advanced"]
    },
    price: {
      type: Number,
      required: true,
    },
    courcethumbnail: {
      type: String,
      required: true,
    },
    enrolledstudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    lecture:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Lecture'
        }
    ],
    creator:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    isPublished :{
        type : Boolean,
        default : false
    },
  },
  { timestamps: true },
);

export const Cource = mongoose.model('Cource',  courcemodel);