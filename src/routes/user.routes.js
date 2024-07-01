import { Router } from "express";
import { registerUser, registerVisitor } from "../controllers/user.controller.js"
import { validator } from "../validations/validator.js"
import { registerVisitorPayload, registrationPayload } from "../validations/user.validator.js";

const router = Router()

router.post("/register", validator.body(registrationPayload), registerUser);

router.post("/connect", validator.body(registerVisitorPayload), registerVisitor);


export default router