import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'
import React, { useContext, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from '../navigation/RootNavigation'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamsList,'Login'>
const LoginScreen:React.FC= () => {
  const navigation = useNavigation<LoginScreenNavigationProp>()
   const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const {SignIn}=useContext(AuthContext)
  const handleSignIn= async()=>{
    try {
      if(email && password){
      const result=await SignIn(email,password);
        if(result){
          navigation.navigate('Home');
        }else{
          Alert.alert('Login failed','Please try with valid credentails',);
        }
      }

    } catch (error) {
      
    }
  }
  return (
    <View style={styles.container}>
          <Text style={styles.headerText}>Login </Text>
          <TextInput
            style={styles.input}
            placeholder='Email'
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
            
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity 
            style={styles.button}
            onPress={handleSignIn}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> navigation.navigate('SignUp')}
          >
            <Text style={styles.linkText}>New here?? Signup</Text>
          </TouchableOpacity>
        </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  headerText:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
  },
  input:{
    width:'100%',
    height:45,
    borderWidth:1,
    borderColor:'#cccccc',
    borderRadius:6,
    paddingHorizontal:10,
    marginBottom:10,

  },
  button:{
    width:'100%',
    height:40,
    backgroundColor:'#007aff',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginTop:10,
  },
  buttonText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',

  },
  linkText:{
    marginTop:16,
    color:'#007aff',

  }
})
export default LoginScreen