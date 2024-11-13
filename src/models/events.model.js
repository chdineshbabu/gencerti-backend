import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    eventId:{
      type:Number,
      required:true
    },
    eventName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    orginizationId: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    certificateTemplate: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema)