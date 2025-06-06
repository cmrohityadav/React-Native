import {Pressable, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';

const TouchableScreen = () => {
  const [
    countForTouchableWithoutFeedback,
    setCountForTouchableWithoutFeedback,
  ] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Touchable Demo</Text>
      <Text>{countForTouchableWithoutFeedback}</Text>
      <TouchableWithoutFeedback
        onPress={() => setCountForTouchableWithoutFeedback(prev => prev + 1)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <Pressable
  style={({ pressed }) => [
    styles.btn,
    { backgroundColor: pressed ? 'red' : '#80D8C3' },
    { marginTop: 10 },
  ]}
>
  {({ pressed }) => (
    <>
      <Text>Pressable</Text>
      <Text>{pressed ? 'Pressed' : 'Not pressed'}</Text>
    </>
  )}
</Pressable>
    </View>
  );
};

export default TouchableScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
  btn: {
    padding: 4,
    alignItems: 'center',
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'#abcd12',
  },
  btnText: {},
});
