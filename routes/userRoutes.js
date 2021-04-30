const express = require("express");
const userController = require("../controllers/UserController");

const api = express.Router();

api.post("/", userController.create);
api.get("/allUsers/:role", userController.getAllUsers);
api.put("/:idUser", userController.update);
api.delete("/:idUser", userController.remove);

module.exports = api;
