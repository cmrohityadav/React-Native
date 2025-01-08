import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Flex = () => {
  return (
    <View>
      <Text>Flex</Text>
      <View style={{flex:1,flexDirection:"row",flexWrap:'wrap'}}>
        <Text style={design.item}>Rohit</Text>
        <Text style={design.item}>Rohit</Text>
        <Text style={design.item}>Rohit</Text>
        <Text style={design.item}>Rohit</Text>
        <Text style={design.item}>Rohit</Text>
        <Text style={design.item}>Rohit</Text>
        <Text style={design.item}>Rohit</Text>

        

      </View>
    </View>
  )
}
const design=StyleSheet.create({
    item:{
        backgroundColor:'blue',
        color:"white",
        margin:5,
        padding:8,
        height:100,
        width:100,
        textAlignVertical:"center",
        textAlign:"center"
        
    }
})
export default Flex