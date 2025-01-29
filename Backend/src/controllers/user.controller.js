import { asynchandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js"; 
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generatetoken = async(userId) =>{
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save();

    return {accessToken, refreshToken};

}

const registeruser = asynchandler(async (req , res)=>{
    const { fullname, email, username, password } = req.body;

    if (
        [fullname, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required");
    }

    const fullnamelowercase = fullname.toLowerCase();
    const usernameLowercase = username.toLowerCase();

    // check if user already exist
    const existinguser = await User.findOne({
        $or: [{  fullname : fullnamelowercase }, { username: usernameLowercase }],
    })

    if (existinguser) {
        throw new ApiError(400, "User already exist");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    if (!avatar) {
        throw new ApiError(500, "Something went wrong while uploading the avatar");
    }


    const user = await User.create({
        fullname: fullnamelowercase,
        email,
        avatar: avatar?.url,
        username: usernameLowercase,
        password,
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user");
    }


    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registered successfully")
    )
})

const loggedinuser = asynchandler(async (req, res) => {

    const {username, password , email } = req.body;

    console.log("ritu ", req.body.password);
    console.log("ritu ", req.body.email);
    console.log("ritu ", req.body.username);

    if (!username || !password) {
        throw new ApiError(404, "username or password is invalid");
      }
    

    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (!user) {    
        throw new ApiError(404, "User not found");
    }

    const ispasswordcorrect = await user.isPasswordCorrect(password);

    if (!ispasswordcorrect) {
        throw new ApiError(401, "Invalid user credentials")
        }

        const {accessToken , refreshToken} = await generatetoken(user._id);

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

        const options = {
            httpOnly: true,
            secure: false,
            
            sameSite: "Lax", // Adjust as needed for cross-site requests
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
          };
        
          console.log("Cookies are being set:");
          console.log("AccessToken:", accessToken);
          console.log("RefreshToken:", refreshToken);
          console.log("Options:", options);

        return res.status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                201, 
                {
                    user : loggedInUser,
                    accessToken,
                    refreshToken
                },
                "User logged in successfully"
            )
        )
})


export { registeruser, loggedinuser }