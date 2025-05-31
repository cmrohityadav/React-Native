import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlexLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>FlexLayout </Text>
      <Text> Main Axis - row</Text>
      <View style={styles.rowContainer}>
        <View style={[styles.box,styles.redBox]}/>
        <View style={[styles.box,styles.blueBox]}/>
        <View style={[styles.box,styles.greenBox]}/>
      </View>
      <Text> Main Axis - column</Text>
      <View style={styles.columnContainer}>
        <View style={[styles.box,styles.redBox]}/>
        <View style={[styles.box,styles.blueBox]}/>
        <View style={[styles.box,styles.greenBox]}/>
      </View>
    </View>
  );
};

export default FlexLayout;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationStyle: 'double',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  box: {
    width: 50,
    height: 50,
  },
  redBox: {
    backgroundColor: 'red',
  },
  greenBox: {
    backgroundColor: 'green',
  },
  blueBox: {
    backgroundColor: 'blue',
  },
  columnContainer:{
    flexDirection: 'column', //default
    alignItems:'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    height:200,
    borderColor:'black',
    borderWidth:1,
  },
});
