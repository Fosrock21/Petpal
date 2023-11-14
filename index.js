const { createPool } = require('mysql')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Password",
})

pool.query('SELECT * FROM petpal.accessory;', (err, res) => {
    return console.log(res)
})
