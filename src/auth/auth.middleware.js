const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        return next()
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return next()
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch(err) {
        // err
        return next(err);
    }

    next()
}

module.exports = {
    checkToken
}