"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userrouter = void 0;
const express_1 = require("express");
const User_controller_1 = require("../controllers/User.controller");
const Userrouter = (0, express_1.Router)();
exports.Userrouter = Userrouter;
Userrouter.route('/signup').post(User_controller_1.register);
Userrouter.route('/signin').post(User_controller_1.login);
