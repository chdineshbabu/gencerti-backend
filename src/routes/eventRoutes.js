import e from "express";
import { createEvent, deleteEvent, getEventByOrg } from "../controllers/event.controller.js";
const router = e.Router()

router.route('/').post(createEvent).get(getEventByOrg).delete(deleteEvent)


export default router 