import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js"

const registerUser = asyncHandler(async (req, res) => {
    try {
        console.log(`registerUser API accessed | ${req.originalUrl}`);

        const { username, name, email, countryCode, phoneNumber, password, designation } = req.body

        console.log(username, name, email, countryCode, phoneNumber, password, designation);

        const userExistCheck = await User.findOne({ $or: [{ username }, { email }] })

        if (userExistCheck) {
            return res.badRequest("User with this email or username already existed.");
        }

        const user = await User.create({
            username,
            email,
            name,
            countryCode,
            phoneNumber,
            password,
            designation
        });

        const checkUserCreated = await User.findById(user._id)
            .select("-password -refreshToken")

        if (!checkUserCreated) {
            return res.badRequest("Faild to create user, Please try agin later.");
        }

        return res.success(true, "User created succesfully.");
    } catch (error) {
        console.log("Error in register user API.");
        return res.error(error.stack);
    }
})

const getInTouch = asyncHandler(async (req, res) => {
    try {
        console.log(`getInTouch API has accessed | ${req.originalUrl}`);

        const { username, name, email, countryCode, phoneNumber, password, designation } = req.body

        console.log(username, name, email, countryCode, phoneNumber, password, designation);

        const userExistCheck = await User.findOne({ $or: [{ username }, { email }] })

        if (userExistCheck) {
            return res.badRequest("User with this email or username already existed.");
        }

        const user = await User.create({
            username,
            email,
            name,
            countryCode,
            phoneNumber,
            password,
            designation
        });

        const checkUserCreated = await User.findById(user._id)
            .select("-password -refreshToken")

        if (!checkUserCreated) {
            return res.badRequest("Faild to create user, Please try agin later.");
        }

        return res.success(true, "User created succesfully.");
    } catch (error) {
        console.log("Error in register user API.");
        return res.error(error.stack);
    }
})

export { registerUser }