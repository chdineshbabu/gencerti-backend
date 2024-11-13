import e from "express"
import cors from 'cors'
import orgRoute from './routes/orginizationRouts.js'
import eventRoute from './routes/eventRoutes.js'
import participantRoute from './routes/participantRoutes.js'



const app = e()
app.use(cors())
app.use(e.json())
app.use(e.urlencoded({extended:true}))
app.use(e.static('public'))

app.use('/org', orgRoute)
app.use('/event', eventRoute)
app.use('/participant', participantRoute)
 

export {app}