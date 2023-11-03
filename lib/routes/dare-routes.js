"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _dareController = require("../controllers/dare-controller");
var _authMiddleware = require("../middleware/authMiddleware");
var _paramValidator = require("../validators/param-validator");
var dareRoutes = (0, _express.Router)();
dareRoutes.post('/add-friend', _authMiddleware.authenticateUser, _dareController.addFriend);
dareRoutes.post('/create-dare', _authMiddleware.authenticateUser, _dareController.createDare);
dareRoutes.post('/suggest-dare', _authMiddleware.authenticateUser, _dareController.suggestDare);
dareRoutes.post('/mark-dare-completed', _authMiddleware.authenticateUser, _dareController.markDareCompleted);
dareRoutes.put('/edit-dare/:id', _authMiddleware.authenticateUser, _paramValidator.IdValidator, _dareController.editDare);
dareRoutes["delete"]('/delete-dare/:id', _authMiddleware.authenticateUser, _paramValidator.IdValidator, _dareController.deleteDare);
dareRoutes.get('filter-dare', _authMiddleware.authenticateUser, _dareController.filterDare);
dareRoutes.get('/pending-dare', _authMiddleware.authenticateUser, _dareController.pendingDares);
var _default = exports["default"] = dareRoutes;
//# sourceMappingURL=dare-routes.js.map