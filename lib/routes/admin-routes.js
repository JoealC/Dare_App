"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _adminController = require("../controllers/admin-controller");
var _authMiddleware = require("../middleware/authMiddleware");
var _paramValidator = require("../validators/param-validator");
var adminRoutes = (0, _express.Router)();
adminRoutes.post('/register', _adminController.registerAdmin);
adminRoutes.post('/login', _adminController.loginAdmin);
adminRoutes.put('/update-admin/:id', _authMiddleware.authenticateAdmin, _paramValidator.IdValidator, _adminController.updateAdmin);
adminRoutes["delete"]('/delete-admin/:id', _authMiddleware.authenticateAdmin, _paramValidator.IdValidator, _adminController.deleteAdmin);
adminRoutes.get('/get-kyc-document', _authMiddleware.authenticateAdmin, _adminController.viewKYCDocuments);
adminRoutes.get('/approve-reject-request', _authMiddleware.authenticateAdmin, _adminController.approveRejectUser);
var _default = exports["default"] = adminRoutes;
//# sourceMappingURL=admin-routes.js.map