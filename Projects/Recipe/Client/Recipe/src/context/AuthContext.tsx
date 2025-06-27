import axios from "axios";
import React, { createContext, ReactNode, useState } from "react";

const API_URL = 'http://10.0.2.2:5000';

interface AuthContextData{
    token:string | null;
    isLoading:boolean;
    userId:string | null;
    SignUp:(email:string,password:string)=> Promise<boolean>;
    SignIn:(email:string,password:string)=> Promise<boolean>;
    SignOut:()=> Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider:React.FC<{children:ReactNode}> = ({children})=>{

    const [token,setToken]=useState<string | null>(null);
    const [userId,setUserId]=useState<string | null>(null);
    const [isLoading,setIsLoading]=useState<boolean>(true);

    const SignUp = async(email:string,password:string): Promise<boolean>=>{
        console.log(email,password);

        try {
            const result = await axios.post(`${API_URL}/api/v1/user/signup`,{email,password})
            
            if(result?.data?.success){
                return true;
            }else{
                return false;
            }
            
        } catch (error) {
            return false;
        }

        
    }
    const SignIn = async(email:string,password:string): Promise<boolean>=>{


        return true;
    }

    const SignOut= async():Promise<void>=>{

    }

    return <AuthContext.Provider value={{token,userId,isLoading,SignUp,SignIn,SignOut}}>
        {children}
    </AuthContext.Provider>

}