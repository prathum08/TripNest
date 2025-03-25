const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
require("dotenv").config();

const port = 8080;

const MONGO_URL = process.env.MONGO_URL;

main()
  .then(() => {
    console.log("connected to the database");
  })
  .catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hello Prathum Karte reh sab badiya hoga");
});

app.listen(port, () => {
  console.log(`server is listining in port ${port}`);
});
