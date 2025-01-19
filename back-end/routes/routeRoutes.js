const express = require("express");
const mongoose = require("mongoose"); // Add this line to import mongoose

const router = express.Router();

// Define your route to update the Bookseat
router.post("/updateBookseat", async (req, res) => {
  try {
    const { collectionName, route, schedule, time, Bookseat } = req.body;

    // Log received data to ensure it's coming correctly
    console.log("Received data:", req.body);

    // Dynamically access the specified collection
    const collection = mongoose.connection.collection(collectionName);

    // Log the collection and data to check if we're accessing it correctly
    console.log("Accessing collection:", collectionName);

    // Update the Bookseat array for the given route and schedule time
    const result = await collection.updateOne(
      { route },
      {
        $addToSet: { [`${schedule}.${time}.Bookseat`]: { $each: Bookseat } },
      }
    );

    // Log the result of the update operation
    console.log("Update result:", result);

    if (result.modifiedCount > 0) {
      res.status(200).json({ message: "Bookseat updated successfully" });
    } else {
      res.status(404).json({ message: "Route or time not found" });
    }
  } catch (error) {
    // Log any error that occurs during the operation
    console.error("Error during update operation:", error);
    res.status(500).json({ message: "An error occurred", error });
  }
});

module.exports = router;
