const mongoose = require('mongoose');

// Define schema for bus details
const BusSchema = new mongoose.Schema({
    route: { type: String, required: true },
    busNumber: { type: String, required: true },
    seatsAvailable: { type: Number, required: true },
});

// Export the model
const Bus = mongoose.model('2025-01-15', BusSchema, '2025-01-15'); // Explicit collection name
module.exports = Bus;
