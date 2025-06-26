import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './src/navigation/RootNavigation'
import { AuthProvider } from './src/context/AuthContext'

const App:React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
    </AuthProvider>
   
  )
}

export default App