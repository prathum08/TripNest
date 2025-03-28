const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
require("dotenv").config();                  // to configure the .env file in js
const Listing = require("./models/listing.js");
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
  res.send("Hi ! I am Root");
});

app.get("/testListing" , async (req , res) => {
  let sampleListing = new Listing({
    title: "My new Villa" , 
    description: "By the beach",
    price: 1200,
    location: "Calangute , Goa",
    country: "India",
  });
  await sampleListing.save();
  console.log("Sample was Saved");
  res.send("successfull testing");
})
app.listen(port, () => {
  console.log(`server is listining in port ${port}`);
});
