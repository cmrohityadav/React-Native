import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const TouchableComponent = () => {
  const [opacityCount, setOpacityCount] = useState(0);
  const [touchableHighlightCount, setTouchableHighlightCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TouchableComponent</Text>
      <TouchableOpacity
        onPress={() => setOpacityCount(opacityCount + 1)}
        style={styles.button}>
        <Text style={styles.btnText}>Touchable Opacity</Text>
        <Text style={styles.btnText}>Touchable count: {opacityCount}</Text>
      </TouchableOpacity>
      <TouchableHighlight
      onPress={()=> setTouchableHighlightCount(pre=>pre + 1)}
      style={styles.button}
      underlayColor={'#FF0000'}
      >
        <View >
          <Text style={styles.btnText}>TouchableHighlight</Text>
          <Text style={styles.btnText}>TouchableHighlight: {touchableHighlightCount}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default TouchableComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationStyle: 'double',
  },
  button: {
    backgroundColor: '#096dbe',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
