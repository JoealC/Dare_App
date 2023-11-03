"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var userSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 200
  },
  full_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200
  },
  kyc_documents: [{
    type: String
  }],
  profile_image: [{
    type: String
  }],
  gender: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: Date
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 200
  },
  otp: {
    type: String,
    require: true
  },
  status: {
    type: Number,
    "enum": ['waiting', 'approved', 'rejected', 'banned', 'pending']
  },
  rejection_count: {
    type: Number,
    "default": 0
  },
  friends: {
    type: [_mongoose["default"].Schema.Types.ObjectId],
    "default": []
  },
  created_at: {
    type: Date,
    "default": Date.now()
  }
}, {
  timestamps: true
});
var User = exports.User = _mongoose["default"].model('User', userSchema);
//# sourceMappingURL=User.js.map