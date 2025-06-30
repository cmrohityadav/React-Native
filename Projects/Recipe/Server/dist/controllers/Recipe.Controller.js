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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecipes = exports.createRecipe = void 0;
const Recipe_modal_1 = require("../models/Recipe.modal");
const createRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, difficulty } = req.body;
        const newRecipe = new Recipe_modal_1.Recipe({
            title, description, difficulty, createdBy: req.userId
        });
        yield newRecipe.save();
        res.status(201).json({
            success: true,
            message: 'Recipe is added successfully !',
            data: newRecipe,
        });
        return;
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong ! Please try again!"
        });
    }
});
exports.createRecipe = createRecipe;
const getRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield Recipe_modal_1.Recipe.find({});
        res.status(200).json({
            success: true,
            data: recipes
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong ! Please try again!"
        });
    }
});
exports.getRecipes = getRecipes;
