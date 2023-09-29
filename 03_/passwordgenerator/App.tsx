import { Text, StyleSheet, View } from 'react-native'
import React, { Component, useState } from 'react'

//form validation
import * as Yup from 'yup'
const passwordSchema=Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,"Should be min of 4 Characters")
  .max(16,"Should be max of 16 Characters")
  .required("length is required")

})
export default  function App() {
  //usestate
  const [password,setPassword]=useState('');
  const [isPasswordGenerated,setIsPasswordGenerated]=useState(false);
  const [lowerCase,setLowerCase]=useState(true)
  const [upperCase,setUpperCase]=useState(false)
  const [numbers,setNumbers]=useState(false)
  const [symbols,setSymbols]=useState(false)



  const generatePasswordString=(passwordLength:number)=>{
    //
  }

  const createPassword=(characters:string,passwordLength:number)=>{
    //
    let result='';
    for(let i=0;i<passwordLength;i++){
      const characterIndex=Math.round(Math.random()*characters.length);
      result+=characters.charAt(characterIndex)
    }
    return result;

  }

  const resetPasswordState=()=>{
    //
  }


    return (
      <View>
        <Text>App</Text>
      </View>
    )
  }


const styles = StyleSheet.create({})