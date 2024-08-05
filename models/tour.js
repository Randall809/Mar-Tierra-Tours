const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
});

module.exports = mongoose.model('Tour', tourSchema);
