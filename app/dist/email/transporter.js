"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var nodemailer_1 = __importDefault(require("nodemailer"));
var transporter = nodemailer_1.default.createTransport({
    from: 'briananthonyruff@protonmail.com',
    service: 'proton',
    auth: {
        user: process.env.NM_USER,
        pass: process.env.NM_PASS,
    },
    port: 465,
    secure: true,
    host: 'smtp.protonmail.com',
    debug: false,
    logger: true,
});
exports.default = transporter;
//# sourceMappingURL=transporter.js.map