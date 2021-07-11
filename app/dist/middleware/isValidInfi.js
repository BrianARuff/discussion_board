"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    var _a = req.body, user_email = _a.user_email, user_name = _a.user_name, user_password = _a.user_password;
    function validEmail(userEmail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
    if (req.path === '/register') {
        if (![user_email, user_name, user_password].every(Boolean)) {
            return res.status(403).json('Missing Credentials');
        }
        else if (!validEmail(user_email)) {
            return res.status(401).json('Invalid Email');
        }
    }
    else if (req.path === '/login') {
        if (![user_email, user_password].every(Boolean)) {
            return res.status(401).json('Missing Credentials');
        }
        else if (!validEmail(user_email)) {
            return res.status(401).json('Invalid Email');
        }
    }
    next();
}
exports.default = default_1;
//# sourceMappingURL=isValidInfi.js.map