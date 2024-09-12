import mongoose,{Schema} from "mongoose";

const topicSchema = new Schema(
    {
        movie_name: String,
        movie_url : String,
        movie_des: String,
        rank : Number,
    },{
        timestamps:true,
    }
)

const Topic = mongoose.model.Topic || mongoose.model("movie_lists",topicSchema);

export default Topic;