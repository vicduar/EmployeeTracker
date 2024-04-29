const { Pool } = require('pg');
const db = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'Twinkie01!',
  database: 'employees',
  port: 5432 // Default PostgreSQL port
});
module.exports = db;

