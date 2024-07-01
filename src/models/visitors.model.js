import mongoose, { Schema } from "mongoose";

const visitorSchema = new Schema({
    projectName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    designation: {
        type: String,
        required: true,
    },
});


export const Visitor = mongoose.model("Visitor", visitorSchema)