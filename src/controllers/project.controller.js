import { Project } from "../models/project.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addProject = asyncHandler(async (req, res) => {
    try {
        console.log(`addProject API accessed | ${req.originalUrl}`);

        const {
            projectName,
            description,
            githubUrl,
            thumbnail,
        } = req.body


        const project = await Project.create({
            projectName,
            description,
            githubUrl,
            thumbnail,
        });


        return res.success({ project }, "Project created succesfully.");
    } catch (error) {
        console.log("Error in add project API.");
        return res.error(error.stack);
    }
})

const getProjects = asyncHandler(async (req, res) => {
    try {
        console.log(`getProjects API accessed | ${req.originalUrl}`);

        const projects = await Project.find({ isActive: true });

        return res.success({ projects });
    } catch (error) {
        console.log("Error in getProjects API.");
        return res.error(error.stack);
    }
})


export { addProject, getProjects }