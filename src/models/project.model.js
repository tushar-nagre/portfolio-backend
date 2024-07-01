import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    githubUrl: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
});


export const Project = mongoose.model("Project", projectSchema)