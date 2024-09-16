import mongoose from "mongoose";
import { DB_NAME} from "../constants.js";


const connectDB = async () => {
    try {
        console.log(`This is url: ${process.env.MONGODB_URI}/${DB_NAME}`)
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`DB connection log ${connectionInstance.ConnectionStates.connected}`)
    } catch (error) {
        console.log("Error: ", error)
        process.exit(1)
    }
}



export default connectDB
