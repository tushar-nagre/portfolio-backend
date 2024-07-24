import { Router } from "express";
import { addProject, getProjects } from "../controllers/project.controller.js";
import { valiadteUser } from "../middlewares/project.middleware.js";

const router = Router()

router.post("/add", valiadteUser, addProject);

router.get("/list", getProjects);

export default router