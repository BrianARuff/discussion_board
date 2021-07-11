"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
require("dotenv/config");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JWT = (function () {
    function JWT() {
    }
    JWT.prototype.generate = function (user_id) {
        var payload = {
            user: user_id,
        };
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
    };
    return JWT;
}());
exports.token = new JWT();
//# sourceMappingURL=jwtToken.js.map