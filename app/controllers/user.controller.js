const UserModel = require("../model/User");
const ListUserService = require("../services/User/listUserService");

class UserController {
  async listUser(req, res) {
    try {
      const listUserService = new ListUserService();
      const users = await listUserService.execute();
      res.json(users);
    } catch (error) {
      res.status(500).json();
    }
  }
}

const userController = new UserController();

module.exports = userController;
