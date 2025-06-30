"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRouter = void 0;
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../middleware/middleware");
const Recipe_controller_1 = require("../controllers/Recipe.controller");
const recipeRouter = express_1.default.Router();
exports.recipeRouter = recipeRouter;
recipeRouter.route('/createRecipe').post(middleware_1.authMiddleware, Recipe_controller_1.createRecipe);
recipeRouter.route('/getRecipes').get(middleware_1.authMiddleware, Recipe_controller_1.getRecipes);
