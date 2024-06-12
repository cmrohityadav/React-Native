import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TabOne from './TabOne'
import TabTwo from './TabTwo'
import TopOne from './TopOne'
const TopTab=createMaterialTopTabNavigator()
const BottomTopMaterial = () => {
  return (
    <TopTab.Navigator>
        <TopTab.Screen name='toptap1' component={TopOne}/>
        <TopTab.Screen name='toptap2' component={TabTwo}/>
        
    </TopTab.Navigator>
  )
}

export default BottomTopMaterial

const styles = StyleSheet.create({})