import mongoose from "mongoose";

const OrginizationSchema =new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
      lowercase: true,
    },
    address: {
      type: String,
    },
    orgEmail: {
      type: String,
      required: true,
      lowercase: true,
    },
    isContract: {
      type: Boolean,
      required: true,
      default: false,
    },
    contractAddress: {
      type: String,
      default: null,
    },
    publicAddress: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const Orginization = mongoose.model("Orginization", OrginizationSchema);
