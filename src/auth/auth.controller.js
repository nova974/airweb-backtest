const userService = require('../users/users.service')
const authService = require('./auth.service')

const login = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await authService.validateUser(email, password)

    if (!user) {
        const error = new Error('Not found')
        return next(error)
    }

    const generateJWT = authService.generateJWT(user)

    res.json({token: generateJWT })
}

module.exports = {
    login
}