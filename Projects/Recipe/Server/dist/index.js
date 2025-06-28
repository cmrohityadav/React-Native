"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const db_1 = require("./db/db");
const cors_1 = __importDefault(require("cors"));
const User_route_1 = require("./routes/User.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, db_1.connectToDb)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1/user', User_route_1.Userrouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
