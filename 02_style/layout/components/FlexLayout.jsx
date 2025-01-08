import { View, Text } from 'react-native'
import React from 'react'

const FlexLayout = () => {
  return (
   <>
    <View style={{flex:1,}}>
        <View style={{backgroundColor:"red",flex:1,}}></View>
        <View style={{backgroundColor:"blue",flex:1}}></View>
        <View style={{backgroundColor:"orange",flex:1}}></View>
    </View>
   </>
  )
}

export default FlexLayout