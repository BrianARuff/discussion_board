"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var authorixation = function (req, res, next) {
    try {
        var token = req.header('token');
        if (!token)
            return res.status(403).json({ error: 'Missing token' });
        var payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = payload.user;
    }
    catch (error) {
        return res.status(403).json('Not Authorized');
    }
    next();
};
exports.default = authorixation;
//# sourceMappingURL=isValidToken.js.map