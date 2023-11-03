"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successResponse = exports.errorResponse = void 0;
var successResponse = exports.successResponse = function successResponse(res, statusCode, message, data) {
  var response = {
    status: true,
    message: message,
    data: data,
    status_code: statusCode
  };
  return res.status(statusCode).json(response);
};
var errorResponse = exports.errorResponse = function errorResponse(res, statusCode, message, data) {
  var response = {
    status: false,
    message: message,
    data: data,
    status_code: statusCode
  };
  return res.status(statusCode).json(response);
};
//# sourceMappingURL=response.js.map