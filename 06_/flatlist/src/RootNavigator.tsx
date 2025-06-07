// import { StyleSheet} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FlatListScreen from './screens/FlatListScreen';
import SectionListScreen from './screens/SectionListScreen';
import TouchableScreen from './screens/TouchableScreen';
import ModalScreenDemo from './screens/ModalScreenDemo';
import PullToRefresh from './screens/PullToRefresh';

export type RootStackParamsList={
    HomeScreen:undefined;
    FlatListScreen:undefined;
    SectionListScreen:undefined;
    TouchableScreen:undefined;
    ModalScreenDemo:undefined;
    PullToRefresh:undefined
}
const RootNavigator:React.FC = () => {
const RootStack = createStackNavigator<RootStackParamsList>();
  return (
   <RootStack.Navigator>
    <RootStack.Screen name="HomeScreen" component={HomeScreen} />
    <RootStack.Screen name="FlatListScreen" component={FlatListScreen} />
    <RootStack.Screen name="SectionListScreen" component={SectionListScreen} />
    <RootStack.Screen name="TouchableScreen" component={TouchableScreen} />
    <RootStack.Screen name="ModalScreenDemo" component={ModalScreenDemo} />
    <RootStack.Screen name="PullToRefresh" component={PullToRefresh} />

   </RootStack.Navigator>
  );
};

export default RootNavigator;

// const styles = StyleSheet.create({});
