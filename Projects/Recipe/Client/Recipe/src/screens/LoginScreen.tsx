/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, useColorScheme, ActivityIndicator} from 'react-native'
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
  const {SignIn}=useContext(AuthContext);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
const [isLoading, setIsLoading] = useState(false);
  const handleSignIn= async()=>{
    if (!email.trim() && !password.trim()) {
    Alert.alert('Missing Fields', 'Please enter email and password');
    return;
  }

  if (!email.trim()) {
    Alert.alert('Missing Email', 'Please enter your email');
    return;
  }

  if (!password.trim()) {
    Alert.alert('Missing Password', 'Please enter your password');
    return;
  }
    try {
      setIsLoading(true);
      if(email && password){
      const result=await SignIn(email,password);
        if(result){
          navigation.navigate('Home');
        }else{
          Alert.alert('Login failed','Please try with valid credentails',);
        }
      }

    } catch (error) {
       Alert.alert('Error', 'Something went wrong');
    }finally{
       setIsLoading(false);
    }
  }
  return (
    <View style={[styles.container,{backgroundColor: isDarkMode ? '#000' : '#fff' },]}>
          <Text style={[styles.headerText,{ color: isDarkMode ? '#fff' : '#000' }]}>Login </Text>
          <TextInput
            style={[styles.input, {
            backgroundColor: isDarkMode ? '#222' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
            borderColor: isDarkMode ? '#555' : '#ccc',
          }, ]}
            placeholder='Email'
            placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
            editable={!isLoading}
            
          />
          <TextInput
            style={[styles.input,{
            backgroundColor: isDarkMode ? '#222' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
            borderColor: isDarkMode ? '#555' : '#ccc',
          },]}
            placeholder='Password'
            placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            editable={!isLoading}
          />
          <TouchableOpacity 
            style={[styles.button,{ backgroundColor: '#007aff' }]}
            onPress={handleSignIn}
            disabled={isLoading}
          >
         {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> navigation.navigate('SignUp')}
          >
            <Text style={[styles.linkText, { color: '#007aff' }]}>New here?? Signup</Text>
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