const authUser = (req, res, next) => {
    if (req.user == null) {
        return res.send("You need to sign in")
    }
    next()
}

module.exports = {
    authUser
}