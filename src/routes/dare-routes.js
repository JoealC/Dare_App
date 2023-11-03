import { Router } from "express";
import { addFriend, createDare, suggestDare, markDareCompleted, editDare, deleteDare, filterDare, pendingDares } from "../controllers/dare-controller";
import { authenticateUser } from "../middleware/authMiddleware";
import { IdValidator } from "../validators/param-validator";
const dareRoutes = Router()

dareRoutes.post('/add-friend', authenticateUser, addFriend)
dareRoutes.post('/create-dare', authenticateUser, createDare)
dareRoutes.post('/suggest-dare', authenticateUser, suggestDare)
dareRoutes.post('/mark-dare-completed', authenticateUser, markDareCompleted)
dareRoutes.put('/edit-dare/:id',authenticateUser,IdValidator, editDare )
dareRoutes.delete('/delete-dare/:id', authenticateUser,IdValidator, deleteDare)
dareRoutes.get('/filter-dare', authenticateUser, filterDare)
dareRoutes.get('/pending-dare', authenticateUser, pendingDares)

export default dareRoutes