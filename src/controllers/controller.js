const inventoryModel = require("../models/inventorySchema");

const createItem = async function (req, res) {
  try {
    const requestBody = req.body;
    //  IF  BODY EMPTY
    if (Object.keys(requestBody).length == 0)
      return res
        .status(400)
        .send({ status: false, message: "Enter Data in Body" });
    inventoryModel.create(requestBody);
    res.status(201).send({ status: true, message: "Item created successfully" });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const getAllItems = async function (req, res) {
  try {
    const allItems = await inventoryModel.find();
    res.status(200).send({ data: allItems });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

module.exports = { createItem , getAllItems};
