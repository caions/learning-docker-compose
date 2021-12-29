const { Sequelize } = require("sequelize");
const db = require("../utils/db");

const User = db.define("clientes", {
  nome: {
    type: Sequelize.STRING,
  },
  endereco: {
    type: Sequelize.STRING,
  },
});

class UserModel {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
  }

  async index() {
    try {
      const result = await User.findAll();
      return result;
    } catch (error) {
      throw new Error();
    }
  }

  async create(user) {
    try {
      const result = await User.create(user);
      return result;
    } catch (error) {
      throw new Error();
    }
  }

  async update(id, user) {
    try {
      const result = await User.update(
        { nome: user.nome, endereco: user.endereco },
        { where: { id: id } }
      );

      return result;
    } catch (error) {
      throw new Error();
    }
  }

  async delete(id) {
    try {
      User.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error();
    }
  }
}

module.exports = UserModel;
