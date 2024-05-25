import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Signup from './components/Signup'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Signup/>

      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})