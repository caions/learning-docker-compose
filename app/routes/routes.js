const express = require("express");
const userControler = require("../controllers/user.controller");

const route = express.Router();

route.get("/", userControler.listUser);

module.exports = route;
