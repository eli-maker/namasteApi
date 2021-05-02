const User = require("../models/User");

function create(req, res) {
  const user = new User();
  const params = req.body;

  user.firstName = params.firstName;
  user.lastName = params.lastName;
  user.email = params.email;
  user.age = params.age;
  user.role = params.role;

  user.save((error, userCreated) => {
    if (error) {
      res.status(500).send({
        statusCode: 500,
        message: "Server error",
      });
    } else {
      if (!userCreated) {
        res.status(400).send({
          statusCode: 400,
          message: "Error creating user",
        });
      } else {
        res.status(200).send({
          statusCode: 200,
          message: "User created successfully",
          dataUser: userCreated,
        });
      }
    }
  });
}

function update(req, res) {
  const parameters = req.body;
  const idUser = req.params.idUser;

  User.findByIdAndUpdate(idUser, parameters, (error, userUpdated) => {
    if (error) {
      res.status(500).send({
        statusCode: 500,
        message: "Server error",
      });
    } else {
      if (!userUpdated) {
        res.status(400).send({
          statusCode: 400,
          message: "Error updating user",
        });
      } else {
        res.status(200).send({
          statusCode: 200,
          message: "User updated successfully",
        });
      }
    }
  });
}

function remove(req, res) {
  const idUser = req.params.idUser;

  User.findByIdAndDelete(idUser, (error, userRemoved) => {
    if (error) {
      res.status(500).send({
        statusCode: 500,
        message: "Server error",
      });
    } else {
      if (!userRemoved) {
        res.status(400).send({
          statusCode: 400,
          message: "Error deleting user",
        });
      } else {
        res.status(200).send({
          statusCode: 200,
          message: "User deleted successfully",
        });
      }
    }
  });
}

function getAllUsers(req, res) {
  const role = req.params.role;
  User.find({ role: role }, (error, allUsers) => {
    if (error) {
      res.status(500).send({
        statusCode: 500,
        message: "Server error",
      });
    } else {
      res.status(200).send({
        statusCode: 200,
        message: "All users",
        allUsers: allUsers,
      });
    }
  });
}

module.exports = {
  create,
  update,
  remove,
  getAllUsers,
};
