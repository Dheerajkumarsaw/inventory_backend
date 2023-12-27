const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    groceryName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    pricePerKg: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    mfd: {
      type: String,
      required: true,
    },
    exp: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("inventory", inventorySchema);
