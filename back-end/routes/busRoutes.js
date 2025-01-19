const express = require("express");
const Bus = require("../models/Bus"); // This will be the Mongoose model for the bus data

const router = express.Router();

// Get bus routes
router.get("/bus-routes", async (req, res) => {
  try {
    // Fetch the required data from the "2025-01-15" collection
    const busRoutes = await Bus.find({}, 'route location -_id');
    
    // Format the response to structure routes like route01, route02, etc.
    const formattedRoutes = busRoutes.reduce((acc, { route, location }) => {
      acc[`route${route}`] = location;
      return acc;
    }, {});

    res.json(formattedRoutes);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching bus routes" });
  }
});

module.exports = router;
