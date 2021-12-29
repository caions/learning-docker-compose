const UserModel = require("../../model/User");

class DeleteUserService {
  async execute(id) {
    try {
      const userModel = new UserModel();
      await userModel.delete(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = DeleteUserService;
