const jwt = require("jsonwebtoken");
const JWT_SECRET = "my_super_secret_key_123";

module.exports = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Access denied. Please login first."
        });
    }
    try {

        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};