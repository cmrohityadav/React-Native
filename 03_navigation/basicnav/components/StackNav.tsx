import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import About from './About';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import BottomTabNav from './BottomTabNav';
import BottomTopMaterial from './BottomTopMaterial';
const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: 'orange',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => (
              <View style={{flexDirection: 'row'}}>
                <Text>hii</Text>
                <Button title="menu" />
                <TextInput placeholder="search" placeholderTextColor={'red'} />
              </View>
            ),
            headerRight: () => <Button title="live" />,
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ntgAbout"
          component={About}
          options={{
            title: 'HelloTitle from ntgAbout',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTitleStyle: {
              fontSize: 30,
              color: 'blue',
            },
          }}
        />
        <Stack.Screen name="BottonTabs" component={BottomTabNav} />
        <Stack.Screen name="BottomTopMaterial" component={BottomTopMaterial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
