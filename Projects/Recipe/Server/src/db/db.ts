import mongoose from "mongoose";
const connectToDb = async():Promise<void> =>{
try {
   const connection= await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB connected: ${connection.connection.host}`)
    
} catch (error) {
    console.error("error while connetion to db:",error);
    process.exit(1);
}
}

export {connectToDb}