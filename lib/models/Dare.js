"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dare = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var dareSchema = new _mongoose["default"].Schema({
  dare_name: {
    type: String,
    required: true
  },
  suggested_to: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  }],
  time: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    "enum": ['pending', 'completed', 'rejected'],
    "default": 'pending'
  },
  created_at: {
    type: Date,
    "default": Date.now()
  }
}, {
  timestamps: true
});
var Dare = exports.Dare = _mongoose["default"].model('Dare', dareSchema);
//# sourceMappingURL=Dare.js.map