import { Response } from "express";
import { AuthRequest } from "../middleware/middleware";
import { Recipe } from "../models/Recipe.modal";

 export const createRecipe=async(req:AuthRequest,res:Response)=>{
    const {title,description,difficulty}=req.body

    const newRecipe= new Recipe({
        title,description,difficulty,createdBy:req.userId
    });
    await newRecipe.save();

    res.status(201).json({
        success:true,
        message:'Recipe is added successfully !',
        data:newRecipe,
    })
 }