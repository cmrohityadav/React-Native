import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const RadioStatic = () => {
  const [radioBg, setRadioBg] = useState(0)
  return (
    <View>
      <Text>RadioStatic</Text>
      <View style={styles.main}>
        <TouchableOpacity onPress={()=>setRadioBg(1)}>
          <View style={styles.radioButtomWrapper}>
            <View style={styles.radioCircle}>
            {
              radioBg===1? <View style={styles.radioBg}></View>: null
            }
              
            </View>
            <Text style={styles.radioOne}>Radio 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setRadioBg(2)}>
          <View style={styles.radioButtomWrapper}>
            <View style={styles.radioCircle}>
            {
              radioBg===2? <View style={styles.radioBg}></View>: null
            }
            </View>
            <Text style={styles.radioOne}>Radio 2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  radioOne: {
    fontSize: 20,

  },
  radioCircle:{
       height:40,
       width:40,
       borderWidth:2,
       borderColor:"black",
       borderRadius:20,
       margin:10,

       
  },
  radioButtomWrapper:{
    flexDirection:"row",
    alignItems:"center"
  },
  radioBg:{
    height:28,
    width:28,
    backgroundColor:'black',
    borderRadius:20,
    margin:4
  }
})
export default RadioStatic