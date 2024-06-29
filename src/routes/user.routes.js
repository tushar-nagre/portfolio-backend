import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"
import { validator } from "../validations/validator.js"
import { registrationPayload } from "../validations/user.validator.js";

const router = Router()

router.post("/register", validator.body(registrationPayload), registerUser);
// router.post("/register", registerUser);


export default router