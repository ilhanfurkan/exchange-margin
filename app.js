const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { json } = require("body-parser");
const { readdirSync } = require("fs");

const dotenv = require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(cors());
app.use(json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb", err));

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.listen(process.env.PORT || 31, () => {
  console.log(`${process.env.PORT}`);
});
