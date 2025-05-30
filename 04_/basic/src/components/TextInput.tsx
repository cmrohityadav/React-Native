import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function TextInputComponent() {
    const [textValue,setTextValue] = useState('');
  return <>
    <View style={styles.container}>
        <Text style={styles.headertext} >Text Input Component</Text>
        
        <Text>Typed Value: {textValue}</Text>
        
        <TextInput style={styles.input}
        value={textValue}
        onChangeText={setTextValue}
        placeholder='user type here'
        />

    </View>
  </>;
}

export default TextInputComponent;

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
    },
    headertext:{
        fontSize:20,
        fontWeight:'bold',
        textDecorationStyle:'double',
    },
    input:{
        height:50,
        borderColor:'grey',
        borderWidth:1,
        paddingHorizontal:10,
        marginBottom:10,

    },
});
