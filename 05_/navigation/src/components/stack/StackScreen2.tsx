import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigationDemoParamsList } from './StackNavigationDemo';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
type StackScreen2NavigationProp = StackNavigationProp<StackNavigationDemoParamsList,'StackScreen2'>;
type StackScreen2RouteProp=RouteProp<StackNavigationDemoParamsList,'StackScreen2'>;
const StackScreen2 = () => {
    const navigation = useNavigation<StackScreen2NavigationProp>();
    const route = useRoute<StackScreen2RouteProp>();
  return (
    <View>
      <Text>StackScreen2</Text>
      <Text>Item id: {route.params.itemId}</Text>
      <Button title="go back to stack screen 1 " onPress={()=>navigation.navigate('StackScreen1')}/>
      <Button title="go back to stack screen 1 using navigation.goBack() " onPress={()=>navigation.goBack()}/>
    </View>
  );
}
;
export default StackScreen2;

const styles = StyleSheet.create({});
