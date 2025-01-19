const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
  route: String,
  startLocation: String,
  endLocation: String,
  startDate: String,
  duration: String,
  location: [String],
  schedule: {
    type: Map,
    of: {
      Bookseat: [String],
    },
  },
});

const Route = mongoose.model("Route", routeSchema);

module.exports = Route;
