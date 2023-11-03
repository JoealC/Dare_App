import { Router } from "express";
import { addFriend, createDare, suggestDare, markDareCompleted, editDare, deleteDare, filterDare, pendingDares } from "../controllers/dare-controller";
import { authenticateUser } from "../middleware/authMiddleware";
import { IdValidator } from "../validators/param-validator";
import { addFriendValidator } from "../validators/addFriend-validator";
import { createValidator } from "../validators/dare-validator";
import { suggestDareValidator } from "../validators/suggestDare-validator";
import { markDareCompletedValidator } from "../validators/markDareCompleted-validator";
const dareRoutes = Router()

dareRoutes.post('/add-friend', authenticateUser,addFriendValidator, addFriend)
dareRoutes.post('/create-dare', authenticateUser,createValidator, createDare)
dareRoutes.post('/suggest-dare', authenticateUser,suggestDareValidator, suggestDare)
dareRoutes.post('/mark-dare-completed', authenticateUser,markDareCompletedValidator, markDareCompleted)
dareRoutes.put('/edit-dare/:id',authenticateUser,IdValidator, editDare )
dareRoutes.delete('/delete-dare/:id', authenticateUser,IdValidator, deleteDare)
dareRoutes.get('/filter-dare', authenticateUser, filterDare)
dareRoutes.get('/pending-dare', authenticateUser, pendingDares)

export default dareRoutes