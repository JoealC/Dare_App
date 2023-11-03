import {Router} from 'express'
import { registerUser, verifyEmail, loginUser, updateUser, deleteUser } from '../controllers/user-controller'
import { authenticateUser } from '../middleware/authMiddleware'
import { IdValidator } from '../validators/param-validator'
import { upload } from '../config/fileupload'
import { registerUserValidator } from '../validators/user-validator'
import { loginValidator } from '../validators/login-validator'

const userRoutes = Router()

userRoutes.post('/register',upload.single('picture') ,registerUserValidator,registerUser)
userRoutes.post('/verify-email', verifyEmail),
userRoutes.post('/login',loginValidator, loginUser)
userRoutes.put('/update-user/:id', authenticateUser,IdValidator, updateUser)
userRoutes.delete('/delete-user/:id', authenticateUser,IdValidator, deleteUser)

export default userRoutes