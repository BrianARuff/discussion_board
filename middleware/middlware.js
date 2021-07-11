"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var auth_1 = __importDefault(require("../routes/auth"));
function middleware(app) {
    app.use(express_1.default.json()),
        app.use(cors_1.default()),
        app.use(morgan_1.default('dev')),
        app.use(helmet_1.default()),
        app.use('/api/auth', auth_1.default);
}
exports.default = middleware;
//# sourceMappingURL=middlware.js.map