import { StyleSheet, Text, View,ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'

const ActivityLoader = () => {
    const [loader,setLoader]=useState(false)
  return (
    <View>
      <Text>ActivityLoader</Text>
      <ActivityIndicator size={80} color={"red"}
      animating={true}
      ></ActivityIndicator>

        <ActivityIndicator size={60}
        animating={loader}
         />
      <Button title='Press to load data'
      onPress={()=>setLoader((v)=>!v)}
      ></Button>
    

    </View>
  )
}

export default ActivityLoader

const styles = StyleSheet.create({})