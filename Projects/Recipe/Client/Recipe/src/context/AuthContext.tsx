import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, ReactNode, useEffect, useState } from "react";

// export const API_URL = 'http://10.0.2.2:5000'; //dev
export const API_URL = 'https://react-native-5cuu.onrender.com'; //pro

interface AuthContextData{
    token:string | null;
    isLoading:boolean;
    userId:string | null;
    SignUp:(email:string,password:string)=> Promise<boolean>;
    SignIn:(email:string,password:string)=> Promise<boolean>;
    SignOut:()=> Promise<void>;
    isAuthenticated:boolean;
    checkAuth: ()=>Promise<boolean>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider:React.FC<{children:ReactNode}> = ({children})=>{

    const [token,setToken]=useState<string | null>(null);
    const [userId,setUserId]=useState<string | null>(null);
    const [isLoading,setIsLoading]=useState<boolean>(true);
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const checkAuth=async():Promise<boolean>=>{
        try {
            const getStoredToken= await AsyncStorage.getItem('token');
            const getStoredUserId= await AsyncStorage.getItem('userId');

            if(getStoredToken && getStoredUserId){
                setToken(getStoredToken);
                setUserId(getStoredUserId);
                setIsAuthenticated(true);
                return true;
            }

            return false;

        } catch (error) {
            console.error(error);
            return false;
        }finally{
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        checkAuth()
    },[])

    const SignUp = async(email:string,password:string): Promise<boolean>=>{

        try {
            const result = await axios.post(`${API_URL}/api/v1/user/signup`,{email,password})
            
            if(result?.data?.success){
                return true;
            }else{
                return false;
            }
            
        } catch (error) {
            console.error(error);
           if(axios.isAxiosError(error)){
            console.error('Error detail',error.response?.data);
           }
            return false;
        }

        
    }
    const SignIn = async(email:string,password:string): Promise<boolean>=>{

        try {
            const result = await axios.post(`${API_URL}/api/v1/user/signin`,{email,password});
            const{token,userId,success}=result?.data;

            if(success){
                await AsyncStorage.setItem('token',token);
                setToken(token);
                await AsyncStorage.setItem('userId',userId);
                setUserId(userId);
                setIsAuthenticated(true);
                return true;
            }else{
                return false;
            }
            


        } catch (error) {
           console.error(error);
           if(axios.isAxiosError(error)){
            console.error('Error detail',error.response?.data);
           } 
           return false;
        }
        
    }

    const SignOut= async():Promise<void>=>{
        try {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('userId');

            setUserId(null);
            setToken(null);
            setIsAuthenticated(false);
            
        } catch (error) {
            console.error(error);
        }
    }

    return <AuthContext.Provider value={{token,userId,isLoading,SignUp,SignIn,SignOut,checkAuth,isAuthenticated}}>
        {children}
    </AuthContext.Provider>

}