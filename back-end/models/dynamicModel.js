const mongoose = require('mongoose');

const getDynamicModel = (collection) => {
  // Check if the model already exists
  return mongoose.models[collection] ||
    mongoose.model(collection, new mongoose.Schema({}, { strict: false }), collection);
};

module.exports = getDynamicModel;
