"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var middlware_1 = __importDefault(require("./middleware/middlware"));
var app = express_1.default();
middlware_1.default(app);
app.listen(process.env.PORT, function () {
    console.log('server is running on port ' + (process.env.PORT || 5000));
});
//# sourceMappingURL=main.js.map