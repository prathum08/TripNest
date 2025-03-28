const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fhorizon%2F&psig=AOvVaw2h7zu4lbS007pj4iiBCMhe&ust=1743276240860000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj2-5jArYwDFQAAAAAdAAAAABAP",
    set: (v) =>
      v === ""
        ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fhorizon%2F&psig=AOvVaw2h7zu4lbS007pj4iiBCMhe&ust=1743276240860000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj2-5jArYwDFQAAAAAdAAAAABAP"
        : v,
  },
  price: String,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
