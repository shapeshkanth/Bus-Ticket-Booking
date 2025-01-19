const mongoose = require('mongoose');

const passengerDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  travelDate: { type: Date, required: true },
  seats: { type: [String], required: true }
  
});

const PassengerDetails = mongoose.model('PassengerDetails', passengerDetailsSchema);
module.exports = PassengerDetails;
