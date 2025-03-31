const mongoose = require("mongoose");
const { Schema } = mongoose;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    filename: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
  },
  price: {
    type: Number,
    required: true,
    min: 0, 
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
