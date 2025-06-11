import { Button, View } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavigationParamsList } from '../RootNavigation';
import { useNavigation } from '@react-navigation/native';
 type HomeScreenProp = StackNavigationProp<RootNavigationParamsList,'HomeScreen'>

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenProp>();
  return (
    <View>
      <Button title="Open basic Animation" onPress={()=> navigation.navigate('BasicAnimation')} />
      <Button title="Interpolation Demo" onPress={()=> navigation.navigate('InterpolationScreen')} />
      <Button title="Combination animation Demo" onPress={()=> navigation.navigate('CombinationAnimationScreen')} />
      <Button title="Gesture animation Demo" onPress={()=> navigation.navigate('GestureAnimationScreen')} />
    </View>
  );
};

export default HomeScreen;

// const styles = StyleSheet.create({});
