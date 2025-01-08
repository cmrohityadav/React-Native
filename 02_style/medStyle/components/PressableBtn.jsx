import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PressableBtn = () => {
  return (
    <View style={styles.main}>
      <Text>PressableBtn</Text>
      <Pressable 
      onPress={()=>console.warn("normal onpress")}
      onLongPress={()=>console.warn("long onpress")}
      onPressIn={()=>console.warn("press in")}
      onPressOut={()=>console.warn("press out")}
      >
        <Text style={styles.PressableBtn}>
            Pressable
        </Text>
      </Pressable>
    </View>
  )
}

export default PressableBtn

const styles = StyleSheet.create({
 main:{
    flex:1,
    justifyContent:'center'
 },
 PressableBtn:{
    backgroundColor:'blue',
    color:"white",
    padding:10,
    margin:10,
    borderRadius:10,
    textAlign:"center",
    elevation:10,
 }
})