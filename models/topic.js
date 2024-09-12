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
const Topic = mongoose.models.movie_list || mongoose.model('movie_list', topicSchema);

module.exports = Topic;