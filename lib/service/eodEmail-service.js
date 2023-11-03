"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = void 0;
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _dotenv = require("dotenv");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _dotenv.config)();
var transporter = exports.transporter = _nodemailer["default"].createTransport({
  host: process.env.host,
  port: process.env.port,
  service: "Gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass
  },
  tls: {
    rejectUnauthorized: false
  }
});
//# sourceMappingURL=eodEmail-service.js.map