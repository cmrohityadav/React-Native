import mongoose, { Schema } from "mongoose";


export interface RecipeSchemaInterface extends Document{
    title:string;
    description:string;
    difficulty:'Easy' | 'Medium' | 'Hard';
    createdBy:mongoose.Types.ObjectId;
    createdAt:Date;
}

const RecipeSchema= new Schema<RecipeSchemaInterface>({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    difficulty:{
        type:String,
        required:true,
        enum:['Easy','Medium','Hard']
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

export const  Recipe=mongoose.model<RecipeSchemaInterface>('Recipe',RecipeSchema)

