import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const WebOpen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WebOpen</Text>
      <View style={styles.webviewContainer}>
        <WebView style={styles.webview} source={{ uri: "https://github.com/cmrohityadav" }} />
      </View>
    </View>
  );
};

export default WebOpen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
  },
  webviewContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
