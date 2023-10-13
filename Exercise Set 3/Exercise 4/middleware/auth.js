const checkUsername = (req, res, next) => {
    const { user } = req.query;
    if (user !== "ab0197") return res.status(403).json({ success: false, msg: "U are not authorized" });

    next();
};

module.exports = {
    checkUsername,
};