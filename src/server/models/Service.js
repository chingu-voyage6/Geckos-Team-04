const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: {
    type: Number,
    default: 0,
  },
  image: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Service', ServiceSchema);
