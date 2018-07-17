const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: String,
  image: String,
  url: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Service', ServiceSchema);
