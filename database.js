const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "NodeReact",
  password: "kevin",
  port: 5432,
});

async function connect() {
  try {
    await pool.connect();
    console.log("Connected to PostgreSQL database");
  } catch (err) {
    console.error("Error connecting to PostgreSQL:", err);
    throw err;
  }
}

module.exports = {
  connect,
  pool,
};
