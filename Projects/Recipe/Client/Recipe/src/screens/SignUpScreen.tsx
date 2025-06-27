import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from '../navigation/RootNavigation'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../context/AuthContext'
type SignUpScreenNavigationParams = StackNavigationProp<RootStackParamsList,'SignUp'>;
const SignUpScreen:React.FC = () => {
    const navigation=useNavigation<SignUpScreenNavigationParams>();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const {SignUp}=useContext(AuthContext)
    const handleSignUp= async() =>{
        if(email && password){
          const success=await SignUp(email,password);
          if(success){
            Alert.alert('Success','Account created successfully...Please login!!');
            navigation.navigate('Login');
          }else{
          Alert.alert('Signup failed','Please try with valid credentials');

          }
        }else{
          Alert.alert('Enter valid email and password');

        }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign Up </Text>
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
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Login')}
      >
        <Text style={styles.linkText}>Already have an account?? Log In</Text>
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
export default SignUpScreen