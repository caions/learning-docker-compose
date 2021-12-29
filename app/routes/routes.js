const express = require("express");
const userControler = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userControler.listUser);
router.post("/", userControler.createUser);
router.put("/:id", userControler.updateUser);
router.delete("/:id", userControler.deleteUser);

module.exports = router;
