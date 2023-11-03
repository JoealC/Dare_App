"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Admin = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var adminSchema = new _mongoose["default"].Schema({
  full_name: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 200
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 200
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 200
  },
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: Number,
    "default": 1
  },
  created_at: {
    type: Date,
    "default": Date.now()
  }
}, {
  timestamps: true
});
var Admin = exports.Admin = _mongoose["default"].model('Admin', adminSchema);
//# sourceMappingURL=Admin.js.map