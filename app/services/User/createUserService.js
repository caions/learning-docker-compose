const UserModel = require("../../model/User");

class CreateUserService {
  async execute(nome, endereco) {
    try {
      const userModel = new UserModel(nome, endereco);
      const user = await userModel.create(userModel);
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = CreateUserService;
