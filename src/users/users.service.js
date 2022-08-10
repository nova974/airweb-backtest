const db = require('../db')

const UsersService = {
    getUserByEmail(email) {
        return db('users').first().where('email', email)
    }

}

module.exports = UsersService