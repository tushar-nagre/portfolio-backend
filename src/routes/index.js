import { Router } from "express";
import projectRoute from "./project.routes.js";
import userRoute from "./user.routes.js";

const router = Router();


// router.use('PATH', ROUTE)
router.use('/project', projectRoute);
router.use('/user', userRoute);


export default router;