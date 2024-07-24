function valiadteUser(req, res, next) {
    try {
        if (req.body.sos == process.env.ADD_PROJECT_KEY) {
            return next();
        }
        throw Error;
    } catch (err) {
        console.log("Error in valiadteUser");
        return res.badRequest("You don't have access to add project")
    }

}

export { valiadteUser }