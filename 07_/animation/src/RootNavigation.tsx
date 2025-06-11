
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BasicAnimation from './screens/BasicAnimation';
import InterpolationScreen from './screens/Interpolation';
import CombinationAnimationScreen from './screens/CombinationAnimationScreen';
import GestureAnimationScreen from './screens/GestureAnimationScreen';
export type RootNavigationParamsList = {
    HomeScreen:undefined;
    BasicAnimation:undefined;
    InterpolationScreen:undefined;
    CombinationAnimationScreen:undefined;
    GestureAnimationScreen:undefined;
}
const RootNavigation = () => {
    const RootStackNavigator = createStackNavigator<RootNavigationParamsList>();
  return (
    <RootStackNavigator.Navigator>
        <RootStackNavigator.Screen  name="HomeScreen" component={HomeScreen}/>
        <RootStackNavigator.Screen  name="BasicAnimation" component={BasicAnimation}/>
        <RootStackNavigator.Screen  name="InterpolationScreen" component={InterpolationScreen}/>
        <RootStackNavigator.Screen  name="CombinationAnimationScreen" component={CombinationAnimationScreen}/>
        <RootStackNavigator.Screen  name="GestureAnimationScreen" component={GestureAnimationScreen}/>
    </RootStackNavigator.Navigator>
  );
};

export default RootNavigation;

// const styles = StyleSheet.create({});
