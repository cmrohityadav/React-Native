import {
  Animated,
  Button,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';

const BasicAnimation = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const handleFadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const handleFadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const handleTranslate = () => {
    Animated.timing(translateAnim, {
      toValue: 100,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.2, 1),
      useNativeDriver: true,
    }).start();
  };
  const handleScale = ()=>{
    Animated.sequence([Animated.timing(scaleAnim,{
      toValue:2,
      duration:500,
      useNativeDriver:true,
    }),
    Animated.timing(scaleAnim,{
      toValue:3,
      duration:500,
      useNativeDriver:true,
    }),
    Animated.timing(scaleAnim,{
      toValue:2,
      duration:500,
      useNativeDriver:true,
    }),
    Animated.timing(scaleAnim,{
      toValue:1,
      duration:500,
      useNativeDriver:true,
    }),
  ]).start();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Basic Animation Demo</Text>

      {/* Fade animation demo */}
      <View style={styles.demoContainer}>
        <Text style={styles.headerText}>FadeIn and FadeOut Animation Demo</Text>
        <Animated.View
          style={[styles.box, styles.fadeBox, {opacity: fadeAnim}]}
        />
        <View style={styles.buttonContainer}>
          <Button title="Fade In" onPress={handleFadeIn} />
          <Button title="Fade Out" onPress={handleFadeOut} />
        </View>
      </View>
      <Text style={styles.headerText}>Translate Animation Demo</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.translateBox,
            {transform: [{translateX: translateAnim}]},
          ]}
        />
      </View>
      <Button title="translate" onPress={handleTranslate} />

      {/* Scale Animation */}
      <Text style={styles.headerText}>Scale Animation Demo</Text>
      <Animated.View
        style={[
          styles.box,
          styles.scaleBox,
          {transform: [{scale:scaleAnim}]},
        ]}
      />
      <Button title="Scale" onPress={handleScale} />

    </ScrollView>
  );
};

export default BasicAnimation;

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
  demoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
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
  fadeBox: {
    backgroundColor: '#3498db',
  },
  translateBox: {
    backgroundColor: '#89c825',
  },
  scaleBox:{
     backgroundColor: '#11b825',
  },
});
