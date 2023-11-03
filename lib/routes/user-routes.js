"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userController = require("../controllers/user-controller");
var _authMiddleware = require("../middleware/authMiddleware");
var _paramValidator = require("../validators/param-validator");
var userRoutes = (0, _express.Router)();
userRoutes.post('/register', _userController.registerUser);
userRoutes.post('verify-email', _userController.verifyEmail), userRoutes.post('/login', _userController.loginUser);
userRoutes.put('/update-user/:id', _authMiddleware.authenticateUser, _paramValidator.IdValidator, _userController.updateUser);
userRoutes["delete"]('/delete-user/:id', _authMiddleware.authenticateUser, _paramValidator.IdValidator, _userController.deleteUser);
var _default = exports["default"] = userRoutes;
//# sourceMappingURL=user-routes.js.map