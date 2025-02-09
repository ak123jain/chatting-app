import  {Router} from "express";
import { getcourceprogress , updateLectureprogress , marksascompleted , Incompletemarks} from "../controllers/courceprogres.controller.js";
import { verifyjwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/progress/:courceId/:userId").get(verifyjwt , getcourceprogress)
router.route("/updateprogress/:courceId/:lectureId").patch(verifyjwt , updateLectureprogress)
router.route("/marksascompleted/:courceId").patch(verifyjwt , marksascompleted)
router.route("/marksasincompleted/:courceId").patch(verifyjwt , Incompletemarks)

export default router