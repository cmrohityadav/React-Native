import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import ModalBasic from './components/ModalBasic';
import PressableBtn from './components/PressableBtn';
import StatusBarr from './components/StatusBar';
import Platforms from './components/Platforms';
import WebOpen from './components/WebOpen';

const App = () => {
  return (
    <>

      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <ModalBasic />
          <PressableBtn />
          <StatusBarr />
          <Platforms />
          <WebOpen />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 16,
  },
});
