const Pool = require('pg').Pool
const pool = new Pool({
    user:"postgres",
    password:'qwe159',
    host: "localhost",
    port: 5432,
    database: "nodejs_postgres"
})

module.exports = pool