const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    movie_name: String,
    movie_url: String,
    movie_des: String,
    movie_type:String
  }
);

// Check if the model is already defined, and if not, define it
const MyMovie = mongoose.models.my_movies || mongoose.model('my_movies', movieSchema);

module.exports = MyMovie;