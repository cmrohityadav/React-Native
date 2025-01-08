import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FlexLayout from './components/FlexLayout';
import TouchableHighlightComp from './components/TouchableHighlightComp';
import RadioStatic from './components/RadioStatic';
import RadioDynamic from './components/RadioDynamic';
import ActivityLoader from './components/ActivityLoader';

const App = () => {
  return (
    <>
      <ScrollView>
        <FlexLayout />
        <TouchableHighlightComp />
        <RadioStatic />
        <RadioDynamic/>
        <ActivityLoader/>
      </ScrollView>
    </>
  );
};

export default App;
