const express = require("express");
const router = express.Router();
const controller = require("./src/controllers/controller");

router.post("/create", controller.createItem);

router.get("/get", controller.getAllItems);

module.exports = router;
