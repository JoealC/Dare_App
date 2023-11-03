import { Router } from "express";
import { registerAdmin, loginAdmin, updateAdmin, deleteAdmin, viewKYCDocuments, approveRejectUser } from "../controllers/admin-controller";
import { authenticateAdmin } from "../middleware/authMiddleware";
import { IdValidator } from "../validators/param-validator";

const adminRoutes = Router()

adminRoutes.post('/register', registerAdmin)
adminRoutes.post('/login', loginAdmin)
adminRoutes.put('/update-admin/:id', authenticateAdmin, IdValidator, updateAdmin)
adminRoutes.delete('/delete-admin/:id', authenticateAdmin, IdValidator, deleteAdmin)

adminRoutes.get('/get-kyc-document',authenticateAdmin, viewKYCDocuments)

adminRoutes.post('/approve-reject-request/:id', authenticateAdmin, approveRejectUser)

export default adminRoutes