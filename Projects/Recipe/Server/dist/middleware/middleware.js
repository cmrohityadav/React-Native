"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    if (!token) {
        res.status(401).json({
            success: false,
            message: 'No valid token is provided! Authorization is denied',
        });
        return; // ✅ Exit early, do not return the response object
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, 'JWTSecreat');
        req.userId = decoded.userId;
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: 'Token is not valid. Please try again',
        });
        return; // ✅ Exit here too
    }
    next(); // ✅ If token is valid, move to next handler
};
exports.authMiddleware = authMiddleware;
