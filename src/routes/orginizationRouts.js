import e from 'express'
import {createOrginization, createContract, deleteUser} from '../controllers/orginization.Controller.js'

const router = e.Router();

router.route('/').post(createOrginization).delete(deleteUser)
router.route('/createContract').post(createContract)

export default router;