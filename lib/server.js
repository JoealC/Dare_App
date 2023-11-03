"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = require("body-parser");
var _database = require("./config/database");
var _userRoutes = _interopRequireDefault(require("./routes/user-routes"));
var _adminRoutes = _interopRequireDefault(require("./routes/admin-routes"));
var _dareController = require("./controllers/dare-controller");
var _dareRoutes = _interopRequireDefault(require("./routes/dare-routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var PORT = 3000;
(0, _database.connectDatabase)();
app.use((0, _bodyParser.json)());
app.use('/user', _userRoutes["default"]);
app.use('/admin', _adminRoutes["default"]);
app.use('/dare', _dareRoutes["default"]);
(0, _dareController.eodSchedule)();
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});
//# sourceMappingURL=server.js.map