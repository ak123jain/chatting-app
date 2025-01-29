import { Router } from "express";
import { registeruser , loggedinuser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import {verifyjwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([{
        name: "avatar", maxCount: 1
    }]),
    registeruser
)

router.route("/loggedin").post(loggedinuser);

export default router;