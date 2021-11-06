const express = require("express");
const app = express();

require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection successful"))
  .catch((error) => console.log(error));

app.listen(3002, () => {
  console.log("Netflix clone api backend connection success!");
});
