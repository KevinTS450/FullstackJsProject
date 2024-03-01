const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgres://nodereactinstance_yikw_user:jVpiWzed0G5PDPfG9pqssq7c1p1ZtgRI@dpg-cnh29c2cn0vc73fd0qv0-a.oregon-postgres.render.com/nodereactinstance_yikw",
  ssl: {
    rejectUnauthorized: false,
  },
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
