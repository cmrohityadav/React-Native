import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useReducer, useRef, useState } from 'react'
// ui render hone se pahale kuchh karna hai wo isse hota hai
const UseLayoutEffect = () => {

    const [dimension,setDimension]=useState({})
    const viewRef=useRef(null)


    useLayoutEffect(()=>{
        console.log("Dimemsion")
        if(viewRef.current){
            viewRef.current.measure((x,y,width,height,pageX,pageY)=>{
                setDimension({x,y,width,height,pageX,pageY})
            })
        }
    },[])
    console.log(dimension)
  return (
    <View style={styles.container}>
      <View style={styles.box} ref={viewRef}/>
      <Text>Box Dimension: </Text>
      <Text>{JSON.stringify(dimension,null,2)}</Text>
    </View>
  )
}

export default UseLayoutEffect

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red"
    },
    box:{
        width:100,
        height:100,
        backgroundColor:'blue'
    }
})