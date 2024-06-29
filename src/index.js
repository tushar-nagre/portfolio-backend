import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        try {
            app.listen(process.env.PORT || 4000, () => {
                console.log(`Server is running on port : ${process.env.PORT}`);
            })
        } catch (error) {
            console.log(`App is not listning on port!!! ${error.stack}`)
        }
    })
    .catch((error) => {
        console.log(`DB connection failed !!! ${error.stack}`)
    })