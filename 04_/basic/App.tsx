import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Basic from './src/components/Basic';
import TextInputComponent from './src/components/TextInput';
import ScrollViewComponent from './src/components/ScrollViewComponent';
import FlexLayout from './src/components/FlexLayout';
import TouchableComponent from './src/components/TouchableComponent';

const App = () => {
  return (
    <View style={styles.container}>
      {/* ScrollView Component */}
      <ScrollView 
      contentContainerStyle={styles.scrollView}
      // style={[styles.scrollView,{backgroundColor:'black'}]}
      
      nestedScrollEnabled={true}
      >

      
      {/* Basic Component */}
      <Basic/>

      {/* Text Input */}
      <TextInputComponent/>

      {/* ScrollView Component */}
      <ScrollViewComponent/>

      {/* Flex layout */}
      <FlexLayout/>

      {/* Touchable component */}
      <TouchableComponent/>
      </ScrollView>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom:20,
  },
  boxContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
  },
  redBox:{
    width:50,
    height:50,
    backgroundColor:'red',
  },
  blueBox:{
     width:50,
    height:50,
    backgroundColor:'blue',
  },
  greenBox:{
     width:50,
    height:50,
    backgroundColor:'green',
  },
  myFirstText:{
    fontSize:30,
    textDecorationLine:'underline',
    color:'black',
  },
  nestedText:{
    fontSize:15,
  },
  nestedTextBold:{
    fontWeight:'800',
  },
  image:{
    width:150,
    height:150,
    resizeMode:'contain',
    marginBottom:10,
  },
  scrollView:{
    margin:20,
    borderColor:'red',
    borderWidth:5,
    padding:5
  },

});

export default App;
