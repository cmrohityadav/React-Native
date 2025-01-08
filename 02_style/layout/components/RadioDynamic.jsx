import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const RadioDynamic = () => {
    const [radioBg, setRadioBg] = useState(0);
    const skill=[
        {
            id:1,
            tech:"C++"
        },
        {
            id:2,
            tech:"Js"
        },
        {
            id:3,
            tech:"Python"
        },
        {
            id:4,
            tech:"SQL"
        }
    ]
  return (
    <View>
      <Text>RadioDynamic</Text>
      <View style={styles.main}>
        
        {
            skill.map((item,index)=><TouchableOpacity key={index} onPress={()=>setRadioBg(item.id)}>
          <View style={styles.radioButtomWrapper}>
            <View style={styles.radioCircle}>
            {
              radioBg===item.id? <View style={styles.radioBg}></View>: null
            }
              
            </View>
            <Text style={styles.radioOne}>{item.tech}</Text>
          </View>
        </TouchableOpacity>)
        }
        
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
export default RadioDynamic