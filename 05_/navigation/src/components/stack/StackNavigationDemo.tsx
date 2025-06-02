import { StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackScreen1 from './StackScreen1';
import StackScreen2 from './StackScreen2';
export type StackNavigationDemoParamsList={
    StackScreen1:undefined;
    StackScreen2:{
        itemId:number
    }
}

const StackNavigationDemo = () => {
    const Stack = createStackNavigator<StackNavigationDemoParamsList>();
  return (
    <Stack.Navigator>
        <Stack.Screen  name="StackScreen1" component={StackScreen1} options={{title:'Custom screen name for 1s'}} />
        <Stack.Screen name="StackScreen2" component={StackScreen2} options={({route})=>({title:`Item ${route.params.itemId}`})} />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;

const styles = StyleSheet.create({});
