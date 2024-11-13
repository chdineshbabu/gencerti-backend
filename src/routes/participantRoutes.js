import e from "express";
import { createParticipent, deleteParticipent, getParticipants } from "../controllers/participantController.js";

const router = e.Router();

router.route('/').post(createParticipent).get(getParticipants).delete(deleteParticipent)


export default router 