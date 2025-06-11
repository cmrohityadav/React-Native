import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';

const CombinationAnimationScreen = () => {
    const moveAndRoateAnim = useRef(new Animated.Value(0)).current;
    const pulseAnim = useRef(new Animated.Value(1)).current;
    const combinationAnimation = () =>{
        moveAndRoateAnim.setValue(0);
        Animated.timing(moveAndRoateAnim,{
            toValue:1,
            duration:1500,
            useNativeDriver:true,
        }).start();
    };
    const pulseAnimation = () =>{
        Animated.loop(
            Animated.sequence([Animated.timing(pulseAnim,{
                toValue:1.3,
                duration:500,
                useNativeDriver:true,
            }),Animated.timing(pulseAnim,{
                toValue:1,
                duration:1000,
                useNativeDriver:true,
            })])
        ).start();
    };
    const moveX = moveAndRoateAnim.interpolate({
        inputRange:[0,1],
        outputRange:[0,100],
    });
    const moveY = moveAndRoateAnim.interpolate({
        inputRange:[0,1],
        outputRange:[0,100],
    });
    const rotate = moveAndRoateAnim.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','360deg'],
    });
    const backgroundColor = moveAndRoateAnim.interpolate({
        inputRange:[0,0.5,1],
        outputRange:['red','blue','green'],
    });
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>CombinationAnimationScreen</Text>
      <Animated.View
        style={[styles.box,{
            transform:[
                {translateX:moveX},
                {translateY:moveY},
                {rotate:rotate},
                {scale:pulseAnim},
            ],
            backgroundColor,
        }]}
      />
      <View>
        <Button title="Move , rotate and change color" onPress={combinationAnimation}/>
        <Button title="Pulse" onPress={pulseAnimation}/>
      </View>
    </View>
  );
};

export default CombinationAnimationScreen;

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
