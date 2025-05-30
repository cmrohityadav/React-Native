import {View, StyleSheet, Text, Image, Button, Alert} from 'react-native';
import React from 'react';

const Basic = () => {
  return (
    <View>
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
      {/* Text component end*/}



      {/* Image Components */}
      {/* remote image */}
      <Image style={styles.image} src="https://avatars.githubusercontent.com/u/100376340?v=4" />
      <Image style={styles.image} source={{uri:'https://th.bing.com/th/id/OIP.EEk3SQRrEku6QN3IU5gbXAHaDB?rs=1&pid=ImgDetMain'}} />
      {/* Local Image */}
      <Image  source={require('../../assets/avatar_1692959594.png')} style={styles.image}  />
      {/* Image Components end*/}



      {/* Button Component */}
      <Button title="Click Me" color={'orange'} onPress={()=> Alert.alert('This is title Rohit','Hi....Rohit This is message')}/>
    </View>
  );
};
const styles = StyleSheet.create({
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

});

export default Basic;
