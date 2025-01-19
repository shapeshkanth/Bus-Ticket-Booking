const express = require('express');
const getDynamicModel = require('../models/dynamicModel');
const router = express.Router();

router.post('/data', async (req, res) => {
  const { collection, route } = req.body;

  if (!collection) {
    return res.status(400).json({ message: "Collection name is required" });
  }

  try {
    const dynamicModel = getDynamicModel(collection);

    // Fetch data where the "to" field matches the provided value
    const query = route ? { route } : {};
    const data = await dynamicModel.find(query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data', error: err.message });
  }
});

module.exports = router;
