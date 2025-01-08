import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Internal = () => {
  return (
    <View>
    <Text>internal style</Text>
      <Text style={styles.text1}>Lorem ipsum dolor sit amet.</Text> 
      <Text style={styles.text2}>Lorem ipsum dolor sit amet.</Text> 
      <Text style={styles.rohit}>Rohit Chhabiraj Yadav</Text> 
      <Text style={styles.rohit}>V Yadav</Text> 
      

    </View>
  )
}
const styles=StyleSheet.create({
    text1:{
        color:'green',
        backgroundColor:"pink",
    },
    text2:{
        fontSize:40,
        color:"blue"
    }
    ,
    rohit:{
      color:'#de1236',
      fontSize:30,
      backgroundColor:'#101010'  ,
      marginBottom:10,
      padding:10,
      borderRadius:10,
      textAlignVertical:"center",
      textAlign:'center',
      borderColor:'green',
      borderWidth:5
    }
})
export default Internal