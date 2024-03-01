const database = require("../database.js");

async function getUserById(id) {
  try {
    const query = "SELECT * FROM users WHERE id = $1";
    const result = await database.pool.query(query, [id]);
    return result.rows[0]; // Assuming you want to return the first matching user
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}

async function GetAllUsers() {
  try {
    const query = "SELECT * FROM users";
    const result = await database.pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error during database query:", error);
    throw error;
  }
}
module.exports = {
  getUserById,
  GetAllUsers,
};
