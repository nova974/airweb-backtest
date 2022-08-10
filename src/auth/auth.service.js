const md5 = require("md5");
const jwt = require('jsonwebtoken')

const userService = require('../users/users.service')

const AuthService = {
    async validateUser(email, password) {
        const user = await userService.getUserByEmail(email)
        const passwordMd5 = md5(user.id + password)

        return user.password_hash === passwordMd5 ? user : null
    },

    generateJWT(user) {
        const payload = {
            email: user.email,
            sub: user.id
        };

        return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    }
}

module.exports = AuthService