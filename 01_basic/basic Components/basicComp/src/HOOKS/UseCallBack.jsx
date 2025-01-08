import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'

const Child = React.memo(({ onButtonClick }) => {
  console.log("Child rendered")
  return <Button title='COUNT +' onPress={onButtonClick} />

})
const UseCallBackComponent = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const increamentCount = useCallback(() => {
    // Purpose::Memoizes the function itself
    // return::A memoized function
    //use:: passing stable functions as props
    console.log("RE create func")
    setCount(prev => prev + step)
  }, [step])


  return (
    <View>
      <Text>Count :{count} Step : {step}</Text>
      <Child onButtonClick={increamentCount} />
      <Button title='Increase Step ' onPress={() => setStep(pichaliValue => pichaliValue + 1)} />
    </View>
  )
}

export default UseCallBackComponent

const styles = StyleSheet.create({})