import mongoose from "mongoose";

const connectMongoDB = ()=> {
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("connected to your db");
    }catch(error){
        console.log(error)
    }
};

export default connectMongoDB;