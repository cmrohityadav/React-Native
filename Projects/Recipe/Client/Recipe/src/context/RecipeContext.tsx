import { createContext, ReactNode, useContext, useState } from "react";
import { API_URL, AuthContext } from "./AuthContext";
import axios from "axios";

export interface Recipe{
    _id:string,
    title:string;
    description:string;
    difficulty:'Easy' | 'Medium' |'Hard';
    createdBy:string;
    createdAt:string;
}

interface RecipeContextData{
    recipes:Recipe[];
    createRecipe: (recipe: Omit<Recipe,'_id' | 'createdBy' | 'createdAt'>)=>Promise<void>;
}

export const RecipeContext =createContext<RecipeContextData>({} as RecipeContextData);

export const RecipeProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [recipes,setRecipes]=useState<Recipe[]>([]);
    const {token}=useContext(AuthContext)
    const createRecipe=async(recipe:Omit<Recipe,'_id' | 'createdBy' | 'createdAt'>):Promise<void>=>{
       console.log("hello from rcipe context")
        try {
            const result = await axios.post(`${API_URL}/api/v1/recipe/createRecipe`,recipe,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            
            if(result?.data?.success){
                setRecipes([...recipes,result.data.data])
            }

            
        } catch (error) {
            console.error(error)
        }
    }
    return <RecipeContext.Provider value={{createRecipe,recipes}}>
        {children}
    </RecipeContext.Provider>
}