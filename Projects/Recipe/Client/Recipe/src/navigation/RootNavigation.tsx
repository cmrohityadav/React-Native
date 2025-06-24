import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';

export type RootStackParamsList={
    Login:undefined;
    SignUp:undefined;
    Home:undefined;
    RecipeDetails:{recipeId:string};
}

const RootNavigation:React.FC = () => {
    const Stack=createStackNavigator<RootStackParamsList>()
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