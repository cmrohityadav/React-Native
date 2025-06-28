import { Router } from "express";
import { login, register } from "../controllers/User.controller";

const Userrouter=Router()

Userrouter.route('/signup').post(register);
Userrouter.route('/signin').post(login);

export {Userrouter}


