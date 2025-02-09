import { asynchandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js"; 
import { uploadOnCloudinary } from "../utils/cloudinary.js"; 
import { Cource } from "../models/cource.model.js";
import { Lecture } from "../models/Lecture.model.js";
import { Courceprogress } from "../models/courceprogress.model.js";


export const getcourceprogress = asynchandler(async (req , res)=>{

    const {courceId} = req.params;
    const {userId} = req.params;

    console.log("courseId",  courceId);
    console.log( "params data", req.params);
    
      // step-1 fetch the user course progress from the database for a particular user

    const courceprogress = await Courceprogress.findOne({
        courceId,
        userId
    }).populate("courceId")

    const courcedetail = await Cource.findById(courceId).populate("lecture")

    if(!courcedetail){
        throw new ApiError(404, "No cource found");
    }

    if(!courceprogress){
        return res.status(200).json(
           new ApiResponse(200,
               {
                   courcedetail,
                   progress : [],
                   complete : false
               }
           )
        )
   }

    return res.status(200).json(new ApiResponse(200, 
        {
            courcedetail,
            lectureProgress: courceprogress.lectureprogress,  
            complete: courceprogress.complete 
         }, 
        "Cource progress found successfully"));
})


// update the lecture progress for a particular user acoording to lecture

export const updateLectureprogress = asynchandler(async (req , res)=>{
    const {courceId} = req.params;
    const userId = req.user._id;
    const {lectureId} = req.params;// es lecture ko add kro in courceprogrees ka andar lectureprogress me

     let courceprogress = await Courceprogress.findOne({
        courceId,
        userId,
        complete : false
    })

    if(!courceprogress){
        // if no cource progree found mean lectureprogress is empty
        courceprogress = new Courceprogress({
            courceId,
            userId,
            complete : false,
            lectureprogress : []
        })

        await courceprogress.save();
    }

    // courseProgress.lectureProgress = [      for explaining
    //     { lectureId: "L1", viewed: true },
    //     { lectureId: "L3", viewed: true }
    //   ];
      
    // find the lecture progress in the course progress
    const lectureindex = await courceprogress.lectureprogress.findIndex((lecture)=>{
        lecture.lectureId === lectureId
    })

    // if lectureindex is -1 mean that lecture of lectureId is not present in lectureprogress so add that lecture and update
    // if lectureindex is 1 mean lecture is present update its status

    if(lectureindex !== -1){
        courceprogress.lectureprogress[lectureindex].viewed = true;
    }else{
        // adding a new lecture
        courceprogress.lectureprogress.push({
            lectureId,
            userId,
            viewed : true,
        })
    }

    await courceprogress.save();

    // if all the lecture is completed 
    const lectureprogresslength = courceprogress.lectureprogress.filter((lectupr)=>{
        lectupr.viewed
    }).length

    const cource = await Cource.findById(courceId)

    if(cource.lecture.length === lectureprogresslength){
        courceprogress.complete = true

        await courceprogress.save()
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                lectureprogress: courceprogress.lectureprogress,  
                complete: courceprogress.complete 
            },
            "lecture updation succesfully complte"
        )
    )

})

// IN MY LECTURE PROGRESS I HAVE ALL THE LECTURE BUT IF THE LECTURE IS VIEWED TRUE THEN IT WILL CONSIDER AS COMPLETED

export const marksascompleted = await asynchandler(async (req , res)=>{

    const {courceId} = req.params;

    const userId = req.user._id;

    console.log("courseId",  courceId);
    console.log( "params data",  userId);
    
    

    const courceprogress = await Courceprogress.findOne({
        courceId, 
        userId
    })

    if(!courceprogress){
        throw new ApiError(404, "No cource progress found");
    }

    courceprogress.lectureprogress.map((lecture)=>{
        lecture.viewed = true
    })

    courceprogress.complete = true

    await courceprogress.save()

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                lectureprogress: courceprogress.lectureprogress,  
                complete: courceprogress.complete 
            },
            "cource is compleed succesfully"
        )
    )
})

export const Incompletemarks = await asynchandler(async (req , res)=>{

    const {courceId} = req.params;

    const userId = req.user._id;

    console.log("courseId",  courceId);
    console.log( "params data",  userId);
    
    

    const courceprogress = await Courceprogress.findOne({
        courceId, 
        userId
    })

    if(!courceprogress){
        throw new ApiError(404, "No cource progress found");
    }

    courceprogress.lectureprogress.map((lecture)=>{
        lecture.viewed = false
    })

    courceprogress.complete = false

    await courceprogress.save()

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                lectureprogress: courceprogress.lectureprogress,  
                complete: courceprogress.complete 
            },
            "cource is  incompleted"
        )
    )
})

