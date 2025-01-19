const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  route: String,
  startLocation: String,
  endLocation: String,
  location: [String],
  schedule: Object
});

const Bus = mongoose.model("Bus", busSchema, "2025-01-15"); // Using the "2025-01-15" collection

module.exports = Bus;

