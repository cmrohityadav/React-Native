import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({route,navigation}:any) => {
  const {name,age,data}=route.params
  return (
    <View>
      <Text>Home</Text>
      <Text>Name: {name}</Text>
      <Text>Name: {age}</Text>
      <Text>{data}</Text>
<Button title='Login page' onPress={()=>navigation.navigate("Login")}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})