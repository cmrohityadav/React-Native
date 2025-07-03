import express from 'express'
import { authMiddleware } from '../middleware/middleware';
import { createRecipe, deleteRecipe, getRecipe, getRecipes } from '../controllers/Recipe.controller';

const recipeRouter=express.Router();
recipeRouter.route('/createRecipe').post(authMiddleware,createRecipe);
recipeRouter.route('/getRecipes').get(authMiddleware,getRecipes);
recipeRouter.route('/getRecipe/:id').get(authMiddleware,getRecipe);
recipeRouter.route('/delete/:id').get(authMiddleware,deleteRecipe);

export {recipeRouter}