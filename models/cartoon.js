const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema(
  {
    movie_name: String,
    movie_url: String,
    movie_des: String,
    rank: Number,
  }
);

// Check if the model is already defined, and if not, define it
const Cartoon = mongoose.models.cartoon_lists|| mongoose.model('cartoon_lists', topicSchema);

module.exports = Cartoon;