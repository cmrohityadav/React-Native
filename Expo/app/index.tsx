import { useState } from "react";
import {  Text, TextInput, View } from "react-native";
function HomeScreen() {
  const [myText,setMyText]=useState('');
  return (
    <View>
      <Text>My Text: {myText} </Text>
      <TextInput
       value={myText}
       onChangeText={(tempValue)=> setMyText(tempValue)}

       keyboardType="default"
       style={{ borderWidth: 1, padding: 10 }}
      //  multiline
      // numberOfLines={5}
      placeholder="Enter your text......"
      />

    </View>
  );
}
export default HomeScreen;
