const ListUserService = require("../services/User/listUserService");
const CreateUserService = require("../services/User/createUserService");
const UpdateUserService = require("../services/User/updateUserService");
const DeleteUserService = require("../services/User/deleteUserService");

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

  async createUser(req, res) {
    const { nome, endereco } = req.body;
    try {
      const createUserService = new CreateUserService();
      const newUser = await createUserService.execute(nome, endereco);
      res.json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateUser(req, res) {
    const id = req.params.id;

    const { nome, endereco } = req.body;
    try {
      const updateUserService = new UpdateUserService();
      const updatedUser = await updateUserService.execute(id, {
        nome,
        endereco,
      });

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    try {
      const deleteUserService = new DeleteUserService();
      await deleteUserService.execute(id);

      res.json();
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

const userController = new UserController();

module.exports = userController;
