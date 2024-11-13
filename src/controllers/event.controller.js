import { Event } from "../models/events.model.js";
import { Orginization } from "../models/orginization.model.js";
import { Schema } from "mongoose";
import { generateRandom } from "../utils/randomNumber.js";

export const createEvent = async (req, res) => {
  const {
    eventName,
    location,
    orgEmail,
    description,
    certificateTemplate,
    date,
  } = req.body;
  const org = await Orginization.findOne({ orgEmail: orgEmail });
  const orginizationId = org.id;
  const eventId = generateRandom();
  try {
    const event = new Event({
      eventId,
      eventName,
      location,
      orginizationId,
      description,
      certificateTemplate,
      date,
    });
    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
};
export const getEventByOrg = async (req, res) => {
  const { orgEmail } = req.body;
  const org = await Orginization.findOne({ orgEmail: orgEmail });
  try {
    const allEvents = await Event.find({ orginizationId: org.id });
    if (!allEvents)
      return res.status(404).json({ message: "No Events Found", error });
    res.status(200).json(allEvents);
  } catch (error) {
    res.status(500).json({ mesage: "Error getting Event by Org", error });
  }
}; 

export const deleteEvent = async (req,res)=>{
  const {eventId } = req.body;
  try{
      const deleteEvent = await Event.deleteOne({eventId:eventId})
      if(!deleteEvent) return res.status(404).json("Event Not Found");
      res.status(200).json("Event Deleted successfully")
  }catch(error){
    res.status(500).json({message:"Error Deleting Event"})
  }
}

