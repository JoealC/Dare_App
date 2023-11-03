import express from 'express'
import { json } from 'body-parser'
import { connectDatabase } from './config/database'
import userRoutes from './routes/user-routes'
import adminRoutes from './routes/admin-routes'
import { eodSchedule } from './controllers/dare-controller'
import dareRoutes from './routes/dare-routes'



const app = express()
const PORT = 3000
connectDatabase()
eodSchedule

app.use(json())


app.use('/user', userRoutes )
app.use('/admin', adminRoutes)
app.use('/dare', dareRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})