
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BasicAnimation from './screens/BasicAnimation';
export type RootNavigationParamsList = {
    HomeScreen:undefined;
    BasicAnimation:undefined;
}
const RootNavigation = () => {
    const RootStackNavigator = createStackNavigator<RootNavigationParamsList>();
  return (
    <RootStackNavigator.Navigator>
        <RootStackNavigator.Screen  name="HomeScreen" component={HomeScreen}/>
        <RootStackNavigator.Screen  name="BasicAnimation" component={BasicAnimation}/>
    </RootStackNavigator.Navigator>
  );
};

export default RootNavigation;

// const styles = StyleSheet.create({});
