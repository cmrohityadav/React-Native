import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UseLayoutEffect from './UseLayoutEffect'
import UseMemo from './UseMemo'
import UseCallBack from './UseCallBack'
import ForwardRefComp from './ForwardRefComp'


//useLayoutEffect


export default function Hooks() {
  return (
    <View style={{flex:1,}}>
      
      {/* <UseLayoutEffect/> */}
      {/* <UseMemo/> */}
      {/* <UseCallBack/> */}
      <ForwardRefComp/>
    </View>
  )
}

const styles = StyleSheet.create({

})