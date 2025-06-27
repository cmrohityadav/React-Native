import { Router } from "express";
import { register } from "../controllers/User.controller";

const Userrouter=Router()

Userrouter.route('/signup').post(register)

export {Userrouter}


