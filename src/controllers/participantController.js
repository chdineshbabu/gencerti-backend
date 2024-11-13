import {Participant} from '../models/participants.model.js'
import { generateRandom } from '../utils/randomNumber.js';


export const createParticipent = async(req,res)=>{
    const {pName, pEmail, phone, eventId} = req.body;
    const pId = generateRandom()
    try{
        const newP = new Participant({pId,pName,pEmail,phone,eventId});
        await newP.save()
        res.status(200).json(newP)
    }catch(error){
        res.status(500).json({message:"Error creating participant", error})
    }
}

export const getParticipants = async(req,res)=>{
    const {eventId} = req.body;
    try{
        const getP = await Participant.find({eventId:eventId})
        res.status(200).json(getP)
    }catch(error){
        res.status(500).json({message:"Error getting Participants", error})
    }
}

export const deleteParticipent = async(req,res)=>{
    const {pId} = req.body;
    try{
        const delUser = await Participant.deleteOne({pId:pId})
        if(!delUser) return res.status(404).json("User not found");
        res.status(200).json("Deleted successfully")
    }catch(error){
        res.status(500).json({message:"Error Deleting participent",error})
    }
}