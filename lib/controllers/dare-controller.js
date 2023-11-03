"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestDare = exports.pendingDares = exports.markDareCompleted = exports.filterDare = exports.eodSchedule = exports.editDare = exports.deleteDare = exports.createDare = exports.addFriend = void 0;
var _Dare = require("../models/Dare");
var _User = require("../models/User");
var _response = require("../middleware/response");
var _dateFns = require("date-fns");
var _nodeCron = require("node-cron");
var _dotenv = require("dotenv");
var _eodEmailService = require("../service/eodEmail-service");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(0, _dotenv.config)();
var addFriend = exports.addFriend = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, userId, friendId, user, friend;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, userId = _req$body.userId, friendId = _req$body.friendId;
          _context.next = 4;
          return _User.User.findById(userId, friendId);
        case 4:
          user = _context.sent;
          if (user) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", (0, _response.errorResponse)(res, 404, 'User not found'));
        case 7:
          _context.next = 9;
          return _User.User.findById(friendId);
        case 9:
          friend = _context.sent;
          if (friend) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", (0, _response.errorResponse)(res, 404, 'Friend not found'));
        case 12:
          if (user.friends.includes(friendId)) {
            _context.next = 19;
            break;
          }
          user.friends.push(friendId);
          _context.next = 16;
          return user.save();
        case 16:
          return _context.abrupt("return", (0, _response.successResponse)(res, 200, 'Friend added successfully'));
        case 19:
          (0, _response.errorResponse)(res, 400, 'Friend is already in your friend list');
        case 20:
          _context.next = 25;
          break;
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](0);
          (0, _response.errorResponse)(res, 500, 'Error processing the request');
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 22]]);
  }));
  return function addFriend(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createDare = exports.createDare = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, dare_name, suggested_to, _dare;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, dare_name = _req$body2.dare_name, suggested_to = _req$body2.suggested_to;
          _dare = new _Dare.Dare({
            dare_name: dare_name,
            suggested_to: suggested_to
          });
          _context2.next = 5;
          return _dare.save();
        case 5:
          (0, _response.successResponse)(res, 200, "Dare created successfully", _dare);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          (0, _response.errorResponse)(res, 500, 'Error creating dare', _context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function createDare(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var suggestDare = exports.suggestDare = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body3, dare_id, friend_id, _dare2;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body3 = req.body, dare_id = _req$body3.dare_id, friend_id = _req$body3.friend_id;
          _context3.next = 4;
          return _Dare.Dare.findById(dare_id);
        case 4:
          _dare2 = _context3.sent;
          if (_dare2) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", (0, _response.errorResponse)(res, 404, "Dare not found"));
        case 7:
          _dare2.suggested_to.push(friend_id);
          _context3.next = 10;
          return _dare2.save();
        case 10:
          (0, _response.successResponse)(res, 200, "Dare suggested to friend", _dare2);
          _context3.next = 16;
          break;
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          (0, _response.errorResponse)(res, 500, "Error suggesting dare to friend");
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return function suggestDare(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var markDareCompleted = exports.markDareCompleted = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var dare_id, _dare3;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          dare_id = req.body.dare_id;
          _context4.next = 4;
          return _Dare.Dare.findById(dare_id);
        case 4:
          _dare3 = _context4.sent;
          if (_dare3) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", (0, _response.errorResponse)(res, 404, "Dare not found"));
        case 7:
          _dare3.status = 'completed';
          _context4.next = 10;
          return _dare3.save();
        case 10:
          (0, _response.successResponse)(res, 200, "Dare marked as completed", _dare3);
          _context4.next = 16;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          (0, _response.errorResponse)(res, 500, "Error marking dare as completed");
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function markDareCompleted(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var editDare = exports.editDare = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var newDareName, _editDare;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          newDareName = req.body.newDareName;
          _context5.next = 4;
          return _Dare.Dare.findByIdAndUpdate(req.params.id, newDareName, {
            "new": true
          });
        case 4:
          _editDare = _context5.sent;
          if (_editDare) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", (0, _response.errorResponse)(res, 404, 'Dare not found'));
        case 7:
          (0, _response.successResponse)(res, 200, 'Dare edited successfully', dare);
          _context5.next = 13;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          (0, _response.errorResponse)(res, 500, 'Error editing dare', _context5.t0);
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function editDare(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteDare = exports.deleteDare = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _deleteDare;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _Dare.Dare.findByIdAndDelete(req.params.id);
        case 3:
          _deleteDare = _context6.sent;
          if (_deleteDare) {
            _context6.next = 6;
            break;
          }
          return _context6.abrupt("return", (0, _response.errorResponse)(res, 404, 'Dare not found'));
        case 6:
          (0, _response.successResponse)(res, 200, "User deleted successfully");
          _context6.next = 12;
          break;
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          (0, _response.errorResponse)(res, 500, "Internal server Error");
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 9]]);
  }));
  return function deleteDare(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var filterDare = exports.filterDare = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$query, dare_name, suggested_to, time, date, filter, filteredDares;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$query = req.query, dare_name = _req$query.dare_name, suggested_to = _req$query.suggested_to, time = _req$query.time, date = _req$query.date;
          filter = {};
          if (dare_name) {
            filter.dare_name = dare_name;
          }
          if (suggested_to) {
            filter.suggested_to = dare_name;
          }
          if (time) {
            filter.time = time;
          }
          if (date) {
            filter.date = date;
          }
          _context7.next = 9;
          return _Dare.Dare.find(filter);
        case 9:
          filteredDares = _context7.sent;
          (0, _response.successResponse)(res, 200, "Dare filtered successfully", filteredDares);
          _context7.next = 16;
          break;
        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](0);
          (0, _response.errorResponse)(res, 500, "Error in filtering dare");
        case 16:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 13]]);
  }));
  return function filterDare(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var pendingDares = exports.pendingDares = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var previousDay, startOfPreviousDay, endOfPreviousDay, _pendingDares;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          previousDay = (0, _dateFns.subDays)(new Date(), 1);
          startOfPreviousDay = (0, _dateFns.startOfDay)(previousDay);
          endOfPreviousDay = (0, _dateFns.endOfDay)(previousDay);
          _context8.next = 6;
          return _Dare.Dare.find({
            date: {
              $gte: startOfPreviousDay,
              $lte: endOfPreviousDay
            },
            status: 'pending'
          });
        case 6:
          _pendingDares = _context8.sent;
          (0, _response.successResponse)(res, 200, "Pending dares from the previous day retrieved successfully", _pendingDares);
          _context8.next = 13;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          (0, _response.errorResponse)(res, 500, 'Error receiving pending dares from previous days');
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 10]]);
  }));
  return function pendingDares(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var eodSchedule = exports.eodSchedule = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var users, _iterator, _step, _loop;
    return _regeneratorRuntime().wrap(function _callee9$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _User.User.find({});
        case 3:
          users = _context10.sent;
          _iterator = _createForOfIteratorHelper(users);
          _context10.prev = 5;
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var user, completeDares, pendingDares, emailContent, mailOptions;
            return _regeneratorRuntime().wrap(function _loop$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  user = _step.value;
                  _context9.next = 3;
                  return _Dare.Dare.find({
                    suggested_to: user._id,
                    status: 'completed'
                  });
                case 3:
                  completeDares = _context9.sent;
                  _context9.next = 6;
                  return _Dare.Dare.find({
                    suggested_to: user._id,
                    status: 'pending'
                  });
                case 6:
                  pendingDares = _context9.sent;
                  emailContent = "Dear ".concat(user.full_name, ",\n\n") + "Here are you completed dares:\n".concat(completeDares.map(function (dare) {
                    return dare.dare_name;
                  }).join('\n'), "\n\n") + "And here are your pending dares:\n".concat(pendingDares.map(function (dare) {
                    return dare.dare_name;
                  }).join('\n'));
                  mailOptions = {
                    from: process.env.user,
                    to: user.email,
                    subject: "End of Day Dares Update",
                    text: emailContent
                  };
                  (0, _nodeCron.schedule)('**20***', function () {
                    _eodEmailService.transporter.sendMail(mailOptions, function (error, info) {
                      if (error) {
                        (0, _response.errorResponse)(res, 400, "Error sending email", error);
                      } else {
                        (0, _response.successResponse)(res, 200, "EOD email sent:", info.response);
                      }
                    });
                  });
                case 10:
                case "end":
                  return _context9.stop();
              }
            }, _loop);
          });
          _iterator.s();
        case 8:
          if ((_step = _iterator.n()).done) {
            _context10.next = 12;
            break;
          }
          return _context10.delegateYield(_loop(), "t0", 10);
        case 10:
          _context10.next = 8;
          break;
        case 12:
          _context10.next = 17;
          break;
        case 14:
          _context10.prev = 14;
          _context10.t1 = _context10["catch"](5);
          _iterator.e(_context10.t1);
        case 17:
          _context10.prev = 17;
          _iterator.f();
          return _context10.finish(17);
        case 20:
          _context10.next = 25;
          break;
        case 22:
          _context10.prev = 22;
          _context10.t2 = _context10["catch"](0);
          return _context10.abrupt("return", (0, _response.errorResponse)(res, 500, 'EOD email error:', _context10.t2));
        case 25:
        case "end":
          return _context10.stop();
      }
    }, _callee9, null, [[0, 22], [5, 14, 17, 20]]);
  }));
  return function eodSchedule(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
//# sourceMappingURL=dare-controller.js.map