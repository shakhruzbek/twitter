const { Pool } = require("pg");
// require("dotenv").config();

// Postgres ma'lumotlari
const pool = new Pool({
  user: "postgres", 
  host: "localhost",
  database: "navruz", 
  password: "1111", 
  port: 1234, 
});

module.exports = pool;
