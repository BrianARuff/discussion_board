"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var authRouter = express_1.default.Router();
var db_1 = __importDefault(require("../config/db"));
var transporter_1 = __importDefault(require("../email/transporter"));
authRouter.post('/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, user_name, user_email, user_password, user, salt, hash, newUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, user_name = _a.user_name, user_email = _a.user_email, user_password = _a.user_password;
                if (!user_name || !user_email || !user_password) {
                    return [2, res.status(400).json('Missing required parameters')];
                }
                return [4, db_1.default.query("SELECT * FROM users WHERE user_email = $1", [user_email])];
            case 1:
                user = _b.sent();
                if (user.rows.length > 0) {
                    return [2, res.status(401).json('User already exists')];
                }
                salt = bcrypt_1.default.genSaltSync(10);
                hash = bcrypt_1.default.hashSync(user_password, salt);
                return [4, db_1.default.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3)", [user_name, user_email, hash])];
            case 2:
                newUser = _b.sent();
                if (newUser.rowCount === 0) {
                    return [2, res.status(500).json('Error creating user')];
                }
                transporter_1.default.sendMail({
                    from: 'briananthonyruff@gmail.com',
                    to: user_email,
                    subject: "Welcome Brian A. Ruff's Email List. Let's chill... I've got cookies!",
                    html: "\n                <html>\n                  <head>\n                    <title>Welcome Brian A. Ruff's Email List</title>\n                  </head>\n                  <body>\n                    <h2></h2>Welcome to Brian A. Ruff's Email List!</h2>\n                    <h4>Thank you for signing up " + user_name + "</h4>\n                    <img src=\"cid:me\" alt=\"Brian Ruff in his car\" width=\"300\" height=\"300\" style=\"border-radius: 50%; border: 1px solid black;\" />\n                    <p>Let's hang out sometime and talk about <em>life</em>.</p> \n                    <p>My number is <a href=\"tel:980-240-6927\">980-240-6927</a></p>\n                    <ol>\n                        <li> My favortie color is <span style=\"color: #00ff00;\">green</span>.<li/>\n                        <li> I like to <a href=\"https://www.chess.com\">Play Chess</a></li>\n                        <li>I like to <a href=\"https://www.youtube.com\">Watch/Make Videos on Youtube</a></li>\n                        <li>Let <strong>me</strong> know what you think of my automatic email system after registering an account on my website, please!</li>\n                    </ol>  \n                    <p>My email is <a href=\"mailto:briananthonyruff@gmail.com\">brff19@gmail.com</a></p>\n                    <p>My LinkedIn is <a href=\"https://www.linkedin.com/in/brianaruff/\">LinkedIn</a></p>\n                    <p>My Twitter is <a href=\"https://twitter.com/brianARuff\">@brianARuff</a></p>\n                    <p>My Facebook is <a href=\"https://www.facebook.com/brian.ruff.102\">Facebook</a></p>\n                    <p>My GitHub is <a href=\"https://github.com/brianaruff\">GitHub</a></p>\n                    <p>My Youtube is <a href=\"https://www.youtube.com/channel/UCxb0mX3Wp6I9YSBngxpSULw\">Youtube</a></p> \n                  </body>\n                </html>",
                    attachments: [
                        {
                            cid: 'me',
                            filename: 'me.jpg',
                            path: __dirname + '../../images/me.jpg',
                        },
                    ],
                }, function (err, info) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(info);
                    }
                });
                return [2, res.status(200).json({ message: 'User created' })];
            case 3:
                error_1 = _b.sent();
                return [2, res.status(500).json(error_1.message)];
            case 4: return [2];
        }
    });
}); });
exports.default = authRouter;
//# sourceMappingURL=auth.js.map