const express = require('express');
const User = require('../models/PassengerDetails');

const router = express.Router();

// POST route to create a new user
router.post('/users', async (req, res) => {
  const { name, age , email, phone, from, to, travelDate, seats } = req.body;

  const newUser = new User({ name, age, email, phone, from, to, travelDate, seats });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    res.status(400).json({ message: 'Error creating user', error: err });
  }
});

module.exports = router;
