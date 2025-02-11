import { asynchandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js"; 
import { uploadOnCloudinary } from "../utils/cloudinary.js"; 
import { Cource } from "../models/cource.model.js";
import { Lecture } from "../models/Lecture.model.js";
 

const createnewcource = asynchandler(async (req, res) => {

   const { courcetitle, courcedescription, courcelevel, price,  creator } = req.body;

   if(!courcetitle || ! courcedescription || ! courcelevel || ! price  || ! creator){
       throw new ApiError(400, "All fields are required");
   }

   const courcethumbnailLocalpath = req.file?.path;

    if(!courcethumbnailLocalpath){
        throw new ApiError(400, "Cource thumbnail is required");
    }
    

    const courcethumbnailed = await uploadOnCloudinary(courcethumbnailLocalpath);

    if(!courcethumbnailed){
        throw new ApiError(500, "Something went wrong while uploading the cource thumbnail");
    }

   const create = await Cource.create({
         courcetitle,
         courcedescription,
         courcelevel,
         price,
         courcethumbnail : courcethumbnailed.url,
         creator : req.user._id
   })


   return res.status(201).json(new ApiResponse(201, create, "Cource created successfully" ));

});

const searchcource = asynchandler(async(req , res)=>{

    const {query , sortBy ,sortType , categories} = req.query;

    const filter = { isPublished : true };  

    if(query){
        filter.$or = [
            {courseTitle : { $regex : query, $options : "i" }},
            {courseDescription : { $regex : query, $options : "i" }},
            {courseLevel : { $regex : query, $options : "i" }},
        ]
    }

    if (categories && categories.length > 0) {
        filter.category = { $in: categories };
    }

    // sortBy = price

    const sort = {};
    if (sortBy) {
        sort[sortBy] = sortType === 'asc' ? 1 : -1;
    }

    const cource = await Cource.find(filter).populate({ path: "creator", select: "name photoUrl" }).sort(sort);

    return res.status(200).json(new ApiResponse(200, cource, "Cource found successfully"));


})


const getPublishedcource = asynchandler(async(req , res)=>{

    const cource = await Cource.find({isPublished : true}).populate({ path: "creator", select: "name photoUrl" });

    if(!cource){
        throw new ApiError(404, "No cource found");
    }

    return res.status(200).json(new ApiResponse(200, cource, "Cource found successfully"));

})  

// find the user who create the cource

const getCreatorcource = asynchandler(async(req , res)=>{

   const userId = req.user._id;

   const cource = await Cource.find({creator : userId});

    if(!cource){
         throw new ApiError(404, "No cource found");
    }

    return res.status(200).json(new ApiResponse(200, cource, "Cource found successfully"));

})


const editcource = asynchandler(async (req , res)=>{

    console.log("Request Params:", req.params); // Debugging
    const courseId = req.params.courceId;


    const userId = req.user._id

    console.log( "Request Body:", req.body);
    

    const {courcetitle , courcedescription , courcelevel , price , creator } = req.body

    let cource = await Cource.findById(courseId)

    console.log("cource" , cource);
    
    if (!cource) {
        throw new ApiError(404 , "Course not found or you don't have permission to edit it")
    }

    const updatedata = {courcetitle , courcedescription , courcelevel , price , creator}

      const upder = await Cource.findByIdAndUpdate(courseId, updatedata  , {new:true});

    return res.status(201).json(
        new ApiResponse(201 ,   upder   , "cource updated succesfully")
    )


})

const getcourceById = asynchandler(async (req , res)=>{

    const courseId = req.params.courceId;

    const cource = await Cource.findById(courseId).populate({ path: "creator", select: "name photoUrl" });

    if(!cource){
        throw new ApiError(404, "No cource found");
    }

    return res.status(200).json(new ApiResponse(200, cource, "Cource found successfully"));

})

const createLecture = asynchandler(async (req , res)=>{

    const {courceId} = req.params;

    console.log( "Request Params:", req.params);
    

    const {title , description    , videourl , createdAt , duration } = req.body

    const course = await Cource.findById(courceId);

    if(!course){
        throw new ApiError(404, "No cource found");
    }

    const lecturehumbnail = req.file?.path;

    const  lecturethubnail = await uploadOnCloudinary(lecturehumbnail);

    const createlecture = await Lecture.create({
        title , 
        description , 
        cource : courceId , 
        videourl , 
        createdAt,
        duration,
        lecturethubnail : lecturethubnail?.url
    })

    if(course){
        course.lecture.push(createlecture._id);
        await course.save();
    }

    return res.status(201).json(new ApiResponse(201, createlecture, "Lecture created successfully"));

})

const getcourcelecture = asynchandler(async (req , res)=>{

    const {courceId} = req.params;

    const cource  = await Cource.findById(courceId).populate("lecture"); 

    if(!cource){
        throw new ApiError(404, "No cource found");
    }

    //  const lectures = cource.lecture || "No lectures found akash";

    return res.status(200).json(new ApiResponse(200,   cource, "Cource found successfully"));
})

const editLecture = asynchandler(async (req , res)=>{

    const {LectureId} = req.params;
    const {courceId} = req.params;

    const {title , duration ,description , videourl , createdAt  } = req.body

     

    const updatedata = {title , duration ,description , videourl , createdAt  }


    const updatedlecture = await Lecture.findByIdAndUpdate(LectureId, updatedata  , {new:true});
    const cource = await Cource.findById(courceId).populate("lecture");

    // ensurethe the cource contain lectuer or not if not then add it to the cource lecture
    if(cource && !cource.lecture.includes(updatedlecture._id)){
        cource.lecture.push(updatedlecture._id);
        await cource.save();
    }



    return res.status(201).json(
        new ApiResponse(201 ,    updatedlecture   , "Lecture updated succesfully")
    )

})


const removelecture = asynchandler(async (req , res)=>{

    const {LectureId} = req.params;

    const lecturee = await  Lecture.findByIdAndDelete(LectureId);

    console.log( " lecturee:", lecturee);

    // Check if lectureId is valid
    
    

    if(!lecturee){
        throw new ApiError(404, "No lecture found");
    }

     // Remove the lecture reference from the associated course
    await Cource.updateOne(
        {lecture : LectureId},// find the course that contains the lecture
        {$pull : {lecture : LectureId}} //  Remove the lectures id from the lectures array
    )



    return res.status(201).json(    
        new ApiResponse(201 , "Lecture deleted succesfully")
    )
})


const isPublished = asynchandler(async (req , res)=>{

    const {courceId} = req.params;

    const {publish} = req.query;

    console.log("publish akashhhhh",  publish);

    const cource = await Cource.findById(courceId);

    if(!cource){
        throw new ApiError(404, "No cource found");
    }

    cource.isPublished = publish === "true";

    await cource.save();

    const statusmessage =  cource.isPublished ? "Published" : "Unpublished";


    return res.status(201).json(
        new ApiResponse(201 , cource.isPublished , `Cource ${statusmessage} successfully`)
    )

})

export { createnewcource , searchcource  , getPublishedcource , getCreatorcource , editcource , getcourceById  , createLecture , getcourcelecture , editLecture , removelecture , isPublished};