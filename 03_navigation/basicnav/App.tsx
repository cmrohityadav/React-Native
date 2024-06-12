import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNav from './components/StackNav';



const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
    <StackNav/>
   
    </>
  )
}

export default App

const styles = StyleSheet.create({})