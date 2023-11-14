const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password:'solo',
    host:"localhost",
    port:5432,
    database:"doggoclient" 
});

module.exports= pool;
