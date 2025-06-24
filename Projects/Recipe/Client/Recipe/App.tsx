import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './src/navigation/RootNavigation'

const App:React.FC = () => {
  return (
   <NavigationContainer>
    <RootNavigation/>
   </NavigationContainer>
  )
}

export default App