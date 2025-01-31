import { Router } from "express";
import { registeruser , loggedinuser , logoutuser , getUserprofile , RefreshAccessToken , updateuserdetails , updateavatar , changecurrentpassword} from "../controllers/user.controller.js";
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
router.route("/profile").get(verifyjwt, getUserprofile);
router.route("/logout").post(verifyjwt, logoutuser);
router.route("/refresh").post(RefreshAccessToken);
router.route("/update").patch(verifyjwt, updateuserdetails);
router.route("/updateavatar").patch(verifyjwt,
    upload.fields([{
        name: "avatar", maxCount: 1
    }]),
    updateavatar
)
router.route("/changepassword").patch(verifyjwt, changecurrentpassword);

export default router;