import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const connectionInstance =await mongoose.connect(`mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database`)
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED",error);
        process.exit(1)
    }
}
export default connectDB;