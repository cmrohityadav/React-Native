import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import About from './About';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';
const Tabs=createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    
    <Tabs.Navigator>
        <Tabs.Screen options={{
            tabBarIcon:
        }} name='Tab1' component={TabOne}/>
        <Tabs.Screen name='Tab2' component={TabTwo}/>
        <Tabs.Screen name='Tab3' component={TabThree}/>

    </Tabs.Navigator>
  )
}

export default BottomTabNav

const styles = StyleSheet.create({})