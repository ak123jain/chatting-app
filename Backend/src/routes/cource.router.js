import {Router} from "express";
import { createnewcource , searchcource , getPublishedcource , getCreatorcource , editcource , getcourceById , createLecture , getcourcelecture , editLecture , removelecture , isPublished} from "../controllers/cource.controller.js";
import { verifyjwt } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/newcource").post(upload.single("courcethumbnail"), verifyjwt , createnewcource);
router.route("/searchcource").get(searchcource);
router.route("/publishedcource").get(getPublishedcource);
router.route("/creatorcource").get(verifyjwt , getCreatorcource);
router.route("/:courceId").patch(verifyjwt , editcource)
router.route("/:courceId").get( verifyjwt, getcourceById)
router.route("/:courceId/lecture").post(upload.single("lecturethubnail"), verifyjwt , createLecture)
router.route("/:courceId/lecture").get(verifyjwt , getcourcelecture)
router.route("/:courceId/lecture/:LectureId").patch(verifyjwt , editLecture)
router.route("/lecture/:LectureId").delete(verifyjwt , removelecture)
router.route("/ispublished/:courceId/publish").patch(verifyjwt , isPublished)

export default router;