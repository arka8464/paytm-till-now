const jwt = require("jsonwebtoken");
import JWT_SECRET from './config'
function authMiddleware(req, res, next) {

    const authUser = req.headers.authorization;
    if (!authUser || !authUser.headers.authorization) {
        return res.status(403).json({});
    }

    const token = authHeader.split('')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();

    } catch (err) {
        return res.status(403).json({});
    }



};
module.exports = authMiddleware