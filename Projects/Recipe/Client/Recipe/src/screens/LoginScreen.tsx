import { View, Text, Button} from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from '../navigation/RootNavigation'
import { useNavigation } from '@react-navigation/native'
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamsList,'Login'>
const LoginScreen:React.FC= () => {
  const navigation = useNavigation<LoginScreenNavigationProp>()
  return (
    <View>
      <Text>LoginS creen</Text>
      <Button 
        title='Go to Sign Up'
        onPress={()=>navigation.navigate('SignUp')}
      />
    </View>
  )
}

export default LoginScreen