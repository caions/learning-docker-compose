const express = require("express");
const User = require("./db");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const usuarios = await User.findAll();

    res.json(usuarios);
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
