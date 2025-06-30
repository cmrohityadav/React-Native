import express from 'express'
import { authMiddleware } from '../middleware/middleware';
import { createRecipe, getRecipes } from '../controllers/Recipe.Controller';

const recipeRouter=express.Router();
recipeRouter.route('/createRecipe').post(authMiddleware,createRecipe);
recipeRouter.route('/getRecipes').get(authMiddleware,getRecipes);

export {recipeRouter}