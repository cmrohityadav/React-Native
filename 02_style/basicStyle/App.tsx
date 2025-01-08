import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Inline from './components/Inline'
import Internal from './components/Internal'
import external from './components/External'
import TextInputt from './components/TextInput'
import SimpleForm from './components/SimpleForm'
import FlatListt from './components/FlatList'
import Mapitr from './components/Mapitr'
import Flex from './components/Flex'

const App = () => {
  return (
    <>
    <SafeAreaView>
    <ScrollView>
    <Inline/>
    <Internal/>
    <View><Text style={[external.rohit,external.v]}>External stylesheet</Text></View>
    <TextInputt/>
    <SimpleForm/>
    <FlatListt/>
    <Mapitr/>
    <Flex/>
    </ScrollView>
    </SafeAreaView>
    
    </>
  )
}

export default App