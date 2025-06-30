import express from 'express'
import { authMiddleware } from '../middleware/middleware';
import { createRecipe } from '../controllers/Recipe.Controller';

const recipeRouter=express.Router();
recipeRouter.route('/createRecipe').post(authMiddleware,createRecipe);

export {recipeRouter}