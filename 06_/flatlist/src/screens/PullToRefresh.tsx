import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const INITIAL_DATA = Array.from({length: 50}, (_, index) => ({
  id: index.toString(),
  title: `Item ${index}`,
  content: `Coupon number ${Math.random()}`,
}));
const PullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  const [loading, setLoading] = useState(false);
  const handleRenderItem = ({
    item,
  }: {
    item: {id: string; title: string; content: string};
  }) => (
    <View style={styles.item}>
      <Text style={styles.header}>Title: {item.title}</Text>
      <Text>Content: {item.content}</Text>
    </View>
  );
  const loadMoreItem = () => {
    if (!loading) {
      setLoading(true);
      // load more items
      setTimeout(() => {
        const newItems = Array.from({length: 10}, (_, index) => ({
          id: (data.length + index.toString()),
          title: `Item ${data.length + index}`,
          content: `Coupon number ${Math.random()}`,
        }));

        setData([...data,...newItems]);
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <View>
      <Text>PullToRefresh</Text>
      <Text>Large List with pull to refresh and infinite scrolling</Text>
      <FlatList
        data={data}
        renderItem={handleRenderItem}
        keyExtractor={item => item.id}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default PullToRefresh;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  flatListHeader: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
