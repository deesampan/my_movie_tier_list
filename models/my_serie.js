const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    movie_name: String,
    movie_url: String,
    movie_des: String,
  }
);

// Check if the model is already defined, and if not, define it
const MySeries = mongoose.models.my_serie || mongoose.model('my_serie', movieSchema);

module.exports = MySeries;