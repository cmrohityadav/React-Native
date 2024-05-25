import { View, Text, SafeAreaView, ScrollView ,StyleSheet} from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import ContactList from './components/ContactList'
import ActionCard from './components/ActionCard'


const App = () => {
  return (
    <SafeAreaView >

      <ScrollView >
      <FlatCard/>
      <ElevatedCard/>
      <FancyCard/>
      <ContactList/>
      <ActionCard/>

       
        
      </ScrollView>
    </SafeAreaView>
  )
}


export default App