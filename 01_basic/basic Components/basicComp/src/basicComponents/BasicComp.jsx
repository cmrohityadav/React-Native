import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const BasicComp = () => {
  return (
   <>
    <View style={styles.container}>
        <Text numberOfLines={2}>
        Hello from basic compoents
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore repellat, alias ipsa suscipit corporis culpa assumenda nulla sit autem? Dolor odit qui blanditiis ut vero officiis ducimus ipsum voluptatibus?
        </Text>
        <TouchableOpacity onPress={()=>console.log("text pressed || touch")} style={{
            backgroundColor:"blue",
            padding:5,
            borderRadius:40,
            
            alignItems:"center",
            justifyContent:"center",
            
        }}>
        <Text>This is the touchale</Text>
        </TouchableOpacity>

        {/* <Image source={require('../../../../../../Smrti/Farewell 2024/Click by Rohit/')}/> */}

        <Image style={styles.image} source={{uri:"https://th.bing.com/th/id/OIP.6ewb8wPQSS8GEh4cS2f3ZAAAAA?rs=1&pid=ImgDetMain"}}/>

        

        
    </View>
   </>
  )
}
const  styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"yellow"
    },
    image:{
        height:200,
        width:150
    }
})
export default BasicComp