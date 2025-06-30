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
    fetchRecipes:()=>Promise<void>
}

export const RecipeContext =createContext<RecipeContextData>({} as RecipeContextData);

export const RecipeProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [recipes,setRecipes]=useState<Recipe[]>([]);
    const {token}=useContext(AuthContext);
    const fetchRecipes=async()=>{
        try {
            const result= await axios.get(`${API_URL}/api/v1/recipe/getRecipes`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setRecipes(result.data.data);

        } catch (error) {
           console.error(error) 
        }
    }
    const createRecipe=async(recipe:Omit<Recipe,'_id' | 'createdBy' | 'createdAt'>):Promise<void>=>{
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
    return <RecipeContext.Provider value={{createRecipe,recipes,fetchRecipes}}>
        {children}
    </RecipeContext.Provider>
}