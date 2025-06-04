// import { StyleSheet} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FlatListScreen from './screens/FlatListScreen';

export type RootStackParamsList={
    HomeScreen:undefined;
    FlatListScreen:undefined;
}
const RootNavigator:React.FC = () => {
const RootStack = createStackNavigator<RootStackParamsList>();
  return (
   <RootStack.Navigator>
    <RootStack.Screen name="HomeScreen" component={HomeScreen} />
    <RootStack.Screen name="FlatListScreen" component={FlatListScreen} />
   </RootStack.Navigator>
  );
};

export default RootNavigator;

// const styles = StyleSheet.create({});
