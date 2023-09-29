import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

//form validation
import * as Yup from 'yup'
const passwordSchema=Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,"Should be min of 4 Characters")
  .max(16,"Should be max of 16 Characters")
  .required("length is required")

})
export default  function App() {
  
    return (
      <View>
        <Text>App</Text>
      </View>
    )
  }


const styles = StyleSheet.create({})