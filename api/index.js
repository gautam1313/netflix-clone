const express = require("express");
const app = express();
const authRoute = require("./routes/auth");

require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection successful"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(3002, () => {
  console.log("Netflix clone api backend connection success!");
});
