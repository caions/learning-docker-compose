const express = require("express");
const cors = require("cors");
const sequelize = require("./utils/db");
const route = require("./routes/routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(route);

const PORT = 3000;

(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, console.log("servidor rodando na porta " + PORT));
  } catch (error) {
    console.log(error);
  }
})();
