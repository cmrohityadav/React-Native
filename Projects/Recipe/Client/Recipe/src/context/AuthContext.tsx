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


        return true;
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