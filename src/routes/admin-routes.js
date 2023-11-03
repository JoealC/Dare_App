import { Router } from "express";
import { registerAdmin, loginAdmin, updateAdmin, deleteAdmin, viewKYCDocuments, approveRejectUser } from "../controllers/admin-controller";
import { authenticateAdmin } from "../middleware/authMiddleware";
import { IdValidator } from "../validators/param-validator";
import { UpdateAdminValidator, registerAdminValidator } from "../validators/admin-validator";
import { loginValidator } from "../validators/login-validator";
import { approveRejectValidator } from "../validators/approve-reject-validator";

const adminRoutes = Router()

adminRoutes.post('/register',registerAdminValidator, registerAdmin)
adminRoutes.post('/login',loginValidator, loginAdmin)
adminRoutes.put('/update-admin/:id', authenticateAdmin,UpdateAdminValidator, IdValidator, updateAdmin)
adminRoutes.delete('/delete-admin/:id', authenticateAdmin, IdValidator, deleteAdmin)

adminRoutes.get('/get-kyc-document',authenticateAdmin, viewKYCDocuments)

adminRoutes.post('/approve-reject-request/:id', authenticateAdmin, approveRejectValidator ,approveRejectUser)

export default adminRoutes