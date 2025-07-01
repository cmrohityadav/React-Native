import { Response } from "express";
import { AuthRequest } from "../middleware/middleware";
import { Recipe } from "../models/Recipe.modal";

 export const createRecipe=async(req:AuthRequest,res:Response)=>{
   try {
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
     return;
   } catch (error) {
    console.error(error)
    res.status(500).json({
         success:false,
         message:"Something went wrong ! Please try again!"
     })
   }
 }

export const getRecipes =async(req:AuthRequest,res:Response)=>{
    try {
       const recipes= await Recipe.find({});
       res.status(200).json({
        success:true,
        data:recipes
       })


    } catch (error) {
        console.error(error)
    res.status(500).json({
         success:false,
         message:"Something went wrong ! Please try again!"
     })
    }
}

export const getRecipe= async(req:AuthRequest,res:Response)=>{
try {
    const getSingleRecipe= await Recipe.findOne({
      _id:req.params.id,
      createdBy:req.userId
    })
    if(!getSingleRecipe){
      res.status(400).json({
         success:false,
         message:"Recipe not found"
     })
     return;
    }

    res.status(200).json({
      success:true,
      message:'Recipe is fetched successfully !',
      data:getSingleRecipe
    })
} catch (error) {
    console.error(error)
    res.status(500).json({
         success:false,
         message:"Something went wrong ! Please try again!"
     })
}
}