const Pool = require('pg').Pool

const pool = new Pool({
    user: 'bryanbilek',
    password: '',
    host: 'localhost',
    port: '5432',
    database: 'pg_practice'
})

module.exports = pool