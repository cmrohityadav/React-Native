import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count,setCount]=useState(0);
    const [input,setInput]=useState("");

    const expensionValue=useMemo(()=>{
      // Purpose:: memoize the result of computations
      // return a memoized value
      // use :: Expensive calculation or derived data
        console.log("Calculating...")
        let total=0;
        for(let i=0;i<1e7;i++){
            total+=i;
        }
        return total

    },[count])

  return (
    <View>
    <Text>Expensive Calculation: {expensionValue}</Text>
    <Button title=' Increase Count' onPress={()=>setCount(count+1)}/>
    <Button title='Update Input' onPress={()=>setInput(input+'!')}/>
    <Text>Input: {input}</Text>
    </View>
  )
}

export default UseMemo

const styles = StyleSheet.create({})