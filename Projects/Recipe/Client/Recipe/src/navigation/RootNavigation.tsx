import React, { useContext, useEffect } from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

export type RootStackParamsList={
    Login:undefined;
    SignUp:undefined;
    Home:undefined;
    RecipeDetails:{recipeId:string};
}

type NavigationProp=StackNavigationProp<RootStackParamsList>;

const RootNavigation:React.FC = () => {
    const Stack=createStackNavigator<RootStackParamsList>()
    const navigation = useNavigation<NavigationProp>();
    const {isAuthenticated,isLoading}=useContext(AuthContext);
  

    useEffect(()=>{
      if(!isLoading){
        if(isAuthenticated){
          navigation.reset({
            index:0,
            routes:[{name:'Home'}]
          })
        }else{
          navigation.reset({
            index:0,
            routes:[{name:'Login'}]
          })
        }
      }
    },[isLoading,isAuthenticated,navigation])
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen 
        name='Login'
        component={LoginScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name='SignUp'
        component={SignUpScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name='Home'
        component={HomeScreen}
        options={{headerShown:false}}
      /><Stack.Screen 
        name='RecipeDetails'
        component={RecipeDetailScreen}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
    
  )
}

export default RootNavigation