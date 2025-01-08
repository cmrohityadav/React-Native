import { View, Text } from 'react-native'
import React from 'react'

const Inline = () => {
  return (
    <View>
    <Text>inline style</Text>
      <Text style={{fontSize:20,color:'red'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, quidem.</Text>
      <Text style={{fontSize:20,color:'red'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, quidem.</Text>
      <Text style={{fontSize:20,color:'red',backgroundColor:"black"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, quidem.</Text>
    </View>
  )
}

export default Inline