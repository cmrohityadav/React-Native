import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      {/* View Components */}
      <View style={styles.boxContainer}>
        <View  style={styles.redBox}/>
        <View style={styles.blueBox} />
        <View  style={styles.greenBox}/>
      </View>

      {/* Text component */}
      <Text style={styles.myFirstText}>My first Text</Text>
      <Text style={styles.nestedText}>
        Text component can be <Text style={styles.nestedTextBold}>Nested</Text>
      </Text>
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

});

export default App;
