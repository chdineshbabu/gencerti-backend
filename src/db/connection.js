import mongoose,{mongo} from "mongoose";

const URL = 'mongodb+srv://pass:pass@cluster0.ijxrshd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${URL}/gencerti`)
        console.log(`\n MongoDb DB HOST: ${connectionInstance.connection.host}`) 
    }catch(error){
        console.log("MongoDb connction error:", error)
        process.exit(1)
    }
}
export default connectDB