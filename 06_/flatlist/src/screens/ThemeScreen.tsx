/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Switch, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeScreen = () => {
    const {theme,toggleTheme} = useTheme();
    const isDarkMode = theme  === 'dark';
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.container,{
        backgroundColor:isDarkMode ? '#000000' : '#ffffff',
    }]}>
      <Text style={[styles.header,{color: isDarkMode ? '#ffffff' : '#000000'}]}>ThemeScreen</Text>
      <Switch
      value={isDarkMode}
      onValueChange={toggleTheme}
      trackColor={{false:'#767577',true:'#81b0ff'}}
      thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{},
});
