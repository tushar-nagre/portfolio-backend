import { Router } from "express";
import { addProject, getProjects } from "../controllers/project.controller.js";

const router = Router()

router.post("/add", addProject);

router.get("/list", getProjects);

export default router