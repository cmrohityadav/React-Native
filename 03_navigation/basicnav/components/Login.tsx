import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
const name="Rohit"
const age="24"
const Login = ({navigation}:any) => {
   
    const [data,setData]=useState("")
  return (
    <View >
      <Text>Login</Text>
      <TextInput placeholder='Enter data to transfer to Home page'
      onChangeText={(text)=>setData(text)}
      />
      <Button  title='Click to goes home screen' onPress={()=>navigation.navigate('Home',{name,age,data})}></Button>
      <Button  title='Click to goes About screen' onPress={()=>navigation.navigate('ntgAbout')}></Button>
      <Button title='tab nav' onPress={()=>navigation.navigate('BottonTabs')}/>
        <Button title='TopTab' onPress={()=>navigation.navigate('BottomTopMaterial')} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})