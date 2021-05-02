const express = require("express");
const centerController = require("../controllers/CenterController");

const api = express.Router();

api.post("/", centerController.create);
api.get("/allCenters", centerController.getAllCenters);
api.put("/:idCenter", centerController.update);
api.delete("/:idCenter", centerController.remove);

module.exports = api;
