const mongoose = require('mongoose');

let url = 'mongodb://localhost:27017/ecommerce';

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

  module.exports = mongoose;