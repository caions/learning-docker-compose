const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "segredo",
  host: process.env.PGHOST || "localhost",
  dialect: "postgres",
});

const User = sequelize.define("clientes", {
  nome: {
    type: Sequelize.STRING,
  },
  endereco: {
    type: Sequelize.STRING,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync({ force: false });

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = User;
