const UserModel = require("../../model/User");

class ListUserService {
  async execute() {
    const userModel = new UserModel();
    const users = await userModel.listUser();
    return users;
  }
}

module.exports = ListUserService;
