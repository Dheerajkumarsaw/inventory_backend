const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const route = require("./routes");

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err.message));

app.use("/", route);

app.listen(process.env.PORT, function () {
  console.log("Express app is Running on port " + process.env.PORT);
});
