import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProjectsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProjectsScreen</Text>
    </View>
  )
}

export default ProjectsScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f5f5f5",
    }
});