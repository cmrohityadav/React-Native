import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// sample data for demo
const FLAT_DATA = Array.from({length: 50}, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));
const FlatListScreen: React.FC = () => {
  const handleFlatListRenderItem = ({ item }: { item: { id: string; title: string } }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flat List Example</Text>
      <FlatList
      data={FLAT_DATA}
      renderItem={handleFlatListRenderItem}
      keyExtractor={(item)=>item.id}
      ListHeaderComponent={<Text style={styles.flatListHeader}>ListHeaderComponent</Text>}
      ListFooterComponent={<Text style={styles.flatListHeader}>ListFooterComponent</Text>}

      />
    </View>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item:{
    padding:20,
    borderBottomWidth:1,
    borderBottomColor:'#eee',
  },
  flatListHeader:{
    fontSize:30,
    fontWeight:'bold',
  },
});
