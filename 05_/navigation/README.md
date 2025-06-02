# Navigation
- Install the required packages in your React Native project
- Mandotroy
```bash
npm install @react-navigation/native
```
```bash
npm install react-native-screens react-native-safe-area-context
```
## Stack Navigator
- Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack


```bash
npm install @react-navigation/stack
```
```bash
npm install react-native-gesture-handler
```
## Bottom Tabs Navigator
- A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused

```bash
npm install @react-navigation/bottom-tabs
```
## Drawer Navigator
- Drawer Navigator renders a navigation drawer on the side of the screen which can be opened and closed via gestures
```bash
npm install @react-navigation/drawer
```
```bash
npm install react-native-gesture-handler react-native-reanimated
```
- Add react-native-reanimated/plugin plugin to your babel.config.js
```js
module.exports = {
    presets: [
      ... // don't add it here :)
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
```


```rohit.jsx
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StackNavigationDemo from './components/stack/StackNavigationDemo';
export type RootStackParamsList={
  Home:undefined;
  StackDemo:undefined;
}

const RootNavigator: React.FC = () => {
  // create a stack navigator
  const Stack = createStackNavigator<RootStackParamsList>();
  return <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="StackDemo" component={StackNavigationDemo}/>
  </Stack.Navigator>;
};

export default RootNavigator;

```


```jsx 
import { useNavigation } from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';
import { RootStackParamsList } from '../RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList,'Home'>;
const HomeScreen: React.FC = () => {
   const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Home Screen</Text>
      <Button  onPress={()=>navigation.navigate('StackDemo') } title="Stack navigation demo" />
    </View>
  );
};

export default HomeScreen;
```


```jsx

import { StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackScreen1 from './StackScreen1';
import StackScreen2 from './StackScreen2';
export type StackNavigationDemoParamsList={
    StackScreen1:undefined;
    StackScreen2:{
        itemId:number
    }
}

const StackNavigationDemo = () => {
    const Stack = createStackNavigator<StackNavigationDemoParamsList>();
  return (
    <Stack.Navigator>
        <Stack.Screen  name="StackScreen1" component={StackScreen1} options={{title:'Custom screen name for 1s'}} />
        <Stack.Screen name="StackScreen2" component={StackScreen2} options={({route})=>({title:`Item ${route.params.itemId}`})} />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;

```
```jsx

import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp} from '@react-navigation/stack';
import { StackNavigationDemoParamsList } from './StackNavigationDemo';
type StackScreen1NavigationProp = StackNavigationProp<StackNavigationDemoParamsList,'StackScreen1'>;
const StackScreen1 = () => {
    const navigation = useNavigation<StackScreen1NavigationProp>();
  return (
    <View>
      <Text>StackScreen1</Text>
      <Button title="Go to Stack Screen 2"
      onPress={()=>navigation.navigate('StackScreen2',{itemId:100})}
      />
    </View>
  );
}
;
export default StackScreen1;

```
```jsx
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


```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
```bash

```
