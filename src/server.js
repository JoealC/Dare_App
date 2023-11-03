import express from 'express'
import { json } from 'body-parser'
import { connectDatabase } from './config/database'
import userRoutes from './routes/user-routes'
import adminRoutes from './routes/admin-routes'
import dareRoutes from './routes/dare-routes'
import eodEmailScheduler from './service/eodEmail-service'



const app = express()
const PORT = 3000
connectDatabase()
eodEmailScheduler


app.use(json())


app.use('/user', userRoutes )
app.use('/admin', adminRoutes)
app.use('/dare', dareRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})