import jwt from 'jsonwebtoken';
import {asynchandler} from '../utils/asynchandler.js';
import {User} from '../models/user.model.js';
import {ApiError} from '../utils/apiError.js';

export const verifyjwt = asynchandler(async(req, _ , next)=>{

   try {
     const token = req.cookies?.accessToken  || req.header("Authentication")?.replace("Bearer  ", "" )
 
     console.log("akash token is required " , token);
         
         if (!token) {
             throw new ApiError(200, "token is required")
         }
 
         const decodedtoken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET);
 
         const user = await User.findById(decodedtoken?.id).select("-password -refreshtoken");
 
         if (!user) {
             throw new ApiError(200,"user is not found  akshu")
         }
 
         req.user = user;
 
         next();
   } catch (error) {
      throw new ApiError(401, "unauthorized beataaa")
   }
})