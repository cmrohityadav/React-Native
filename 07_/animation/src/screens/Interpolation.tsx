import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';

const InterpolationScreen = () => {
    const animation = useRef(new Animated.Value(0)).current;
    const hanleStartAnimation = ()=>{
        Animated.timing(animation,{
            toValue:1,
            duration:2500,
            useNativeDriver:false,
        }).start(()=>animation.setValue(0));
    };

    const backgroundColor = animation.interpolate({
        inputRange:[0,0.5,1],
        outputRange:['red','blue','green'],
    });

    const rotate = animation.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','360deg'],
    });

    const borderRadius = animation.interpolate({
        inputRange:[0,1],
        outputRange:[0,100],
    });

    const size = animation.interpolate({
        inputRange:[0,1],
        outputRange:[100,200],
    });
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Interpolation</Text>
      <Animated.View style={[styles.box,{backgroundColor,transform:[{rotate}],borderRadius,width:size,height:size}]}>
        <Text style={styles.boxText}>Interpolate Me!</Text>
      </Animated.View>
      <Button title="Star Animation" onPress={hanleStartAnimation}/>
    </View>
  );
};

export default InterpolationScreen;

const styles = StyleSheet.create({
    container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  boxText:{
    fontSize:16,
    fontWeight:'bold',
  },
});
