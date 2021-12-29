const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "segredo",
  host: process.env.PGHOST || "localhost",
  dialect: "postgres",
});

module.exports = db;
