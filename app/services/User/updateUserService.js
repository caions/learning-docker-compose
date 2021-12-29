const UserModel = require("../../model/User");

class UpdateUserService {
  async execute(id, user) {
    try {
      const userModel = new UserModel();
      const updatedUser = await userModel.update(id, user);
      return updatedUser;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UpdateUserService;
