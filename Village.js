const mongoose = require('mongoose');

const villageSchema = new mongoose.Schema({ //Define the schema for the village model
  name: {
    type: String,
    required: true
  },
  numberOfCitizens: {
    type: Number,
    required: true
  },
  leader: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Village', villageSchema);
