const database = require("../database.js");
const moment = require("moment");
const utils = require("../utils/utils");
const jwt = require("jsonwebtoken");

async function registerUser(user) {
  try {
    const query = `
      INSERT INTO users (nom, prenom, email, password, date_naissance, is_activate, age)
      VALUES ($1, $2, $3, $4, $5, false, $6)
    `;

    console.log("Executing query:", query);
    console.log("User details:", user);
    const hashedPassword = await utils.CryptPass(user.password);
    const age = await utils.calculateAge(user.date_naissance); // Ensure age is at the correct position in the parameters array
    await database.pool.query(query, [
      user.nom,
      user.prenom,
      user.email,
      hashedPassword,
      user.date_naissance,
      age,
    ]);

    console.log("User registered successfully");
  } catch (err) {
    console.error("Error during user registration:", err);
    throw err;
  }
}

module.exports = {
  registerUser,
};
