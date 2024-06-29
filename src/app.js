import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import ResponseHelper from './helpers/response.helper.js';

const app = express()

app.use(cors({ origin: process.env.CORS_ORIGIN }))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())
new ResponseHelper().init(app);

// routes import
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)

export { app } 