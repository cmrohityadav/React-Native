import { User } from "../models/User.model";
import bcrypt from 'bcryptjs'
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
export const register =async(req:Request,res:Response):Promise<void>=>{
const {email,password}=req.body;
  try {
    const isExistingUser =await User.findOne({email});
  
    if(isExistingUser){
       res.status(400).json({
          message:'User already exist with same email! Please try another eamil'
      })
    }

    const hashPassword = await bcrypt.hash(password,12);
    console.log("hashedpasswordd:",hashPassword)
    const newUser = new User({email,password:hashPassword});
    await newUser.save();
    res.status(201).json({
      success:true,
      message:'User created successfully'
    })
  } catch (error) {
    console.log(error);
     res.status(500).json({
        success :false,
        message:'Something went wrong'
      })
  }
}


export const login =async(req:Request,res:Response):Promise<any>=>{

  try {
    const {email,password}=req.body;
    const currentUser= await User.findOne({email});

    if(!currentUser){
      return res.status(400).json({
      success:false,
      message:'Invalid credentials' 
    })
    }

    const isPasswordMatch = await bcrypt.compare(password,currentUser.password);
    if(!isPasswordMatch){
      return res.status(400).json({
      success:false,
      message:'Invalid Password' 
    })
    }
    const token= jwt.sign({
      userId:currentUser._id
    },'JWTSecreat',{expiresIn:'1h'})

    return res.status(200).json({
      success:'true',
      token,
      userId:currentUser._id
    })

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message:'Something went wrong! Please try again  ' 
    })
  }
}