const path = require('path')

const knex = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
        filename: path.join(__dirname, 'DATABASE.sqlite')
    },
    useNullAsDefault: false,
});

module.exports = knex