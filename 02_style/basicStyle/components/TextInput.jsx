import { View, Text,TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const TextInputt = () => {
    const [name,setName]=useState("vandhu")
  return (
    <View>
      <Text>TextInput</Text>
      <Text>Your name is {name}</Text>
      <TextInput

        placeholder='Enter your text'
        style={{fontSize:20,borderColor:"blue",borderWidth:2}}
        onChangeText={(text)=>setName(text)}
        value={name}
      />

      <Button title='Clear above field' onPress={()=>setName("")}/>
    </View>
  )
}

export default TextInputt