import {Router} from 'express'
import { registerUser, verifyEmail, loginUser, updateUser, deleteUser } from '../controllers/user-controller'
import { authenticateUser } from '../middleware/authMiddleware'
import { IdValidator } from '../validators/param-validator'
import { upload } from '../config/fileupload'

const userRoutes = Router()

userRoutes.post('/register',upload.single('picture') ,registerUser)
userRoutes.post('/verify-email', verifyEmail),
userRoutes.post('/login', loginUser)
userRoutes.put('/update-user/:id', authenticateUser,IdValidator, updateUser)
userRoutes.delete('/delete-user/:id', authenticateUser,IdValidator, deleteUser)

export default userRoutes