import {View, StyleSheet} from 'react-native';
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
});

export default App;
