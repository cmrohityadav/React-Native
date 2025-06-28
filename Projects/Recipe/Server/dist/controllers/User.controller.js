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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const User_model_1 = require("../models/User.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const isExistingUser = yield User_model_1.User.findOne({ email });
        if (isExistingUser) {
            res.status(400).json({
                message: 'User already exist with same email! Please try another eamil'
            });
        }
        const hashPassword = yield bcryptjs_1.default.hash(password, 12);
        console.log("hashedpasswordd:", hashPassword);
        const newUser = new User_model_1.User({ email, password: hashPassword });
        yield newUser.save();
        res.status(201).json({
            success: true,
            message: 'User created successfully'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const currentUser = yield User_model_1.User.findOne({ email });
        if (!currentUser) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            });
        }
        const isPasswordMatch = yield bcryptjs_1.default.compare(password, currentUser.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Password'
            });
        }
        const token = jsonwebtoken_1.default.sign({
            userId: currentUser._id
        }, 'JWTSecreat', { expiresIn: '1h' });
        return res.status(200).json({
            success: true,
            token,
            userId: currentUser._id
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again  '
        });
    }
});
exports.login = login;
