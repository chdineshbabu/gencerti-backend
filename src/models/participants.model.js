import mongoose, {Schema} from "mongoose";

const participantSchema = new Schema({
    pId:{
        type: Number,
        required:true,
    },
    pName:{
        type: String,
        required: true
    },
    pEmail:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    eventId:{
        type: Number,
        required: true
    }
},{timestamps:true})

export const Participant = mongoose.model("Participant", participantSchema)