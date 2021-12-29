const express = require("express");
const route = require("./routes");
const app = express();

app.use(express.json());
app.use(route);

const PORT = 3000;

app.listen(PORT, console.log("servidor rodando na porta " + PORT));
