import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const SimpleForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [display, setDisplay] = useState(false)

    return (
        <View>
            <Text>SimpleForm</Text>
            <TextInput
                placeholder='Enter username'
                style={styles.textIn}
                value={name}
                onChangeText={(para) => setName(para)}
            />

            <TextInput
                placeholder='Enter email'
                style={styles.textIn}
                value={email}
                onChangeText={(para) => setEmail(para)}
            />

            <TextInput
                placeholder='Enter password'
                secureTextEntry={true}
                style={styles.textIn}
                onChangeText={(para) => setPassword(para)}
                placeholderTextColor={"violet"}
                value={password}
            />

            <Button 
                title='Print value'
                color={"green"}
                onPress={()=> setDisplay(true)}
                
            />
            <View style={{marginTop:5}}>
            <Button
                title='Clear value'
                color={"red"}
                onPress={()=>{
                    setDisplay(false)
                    setEmail("")
                    setName("")
                    setPassword("")
                }}
            />
            </View>

            {
                display?
               <View>
                <Text>Username {name}</Text>
                <Text>Username {email}</Text>
                <Text>Username {password}</Text>
               </View>:null
            }
           
        </View>
    )
}
const styles = StyleSheet.create({
    textIn: {
        fontSize: 20,
        color: 'green',
        borderWidth: 2,
        margin: 10,
        
    }
})
export default SimpleForm