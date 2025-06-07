import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
interface Post {
  id: number;
  title: string;
}
const DataFechingDemo = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchListOfPost = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const dataResponse: Post[] = await response.json();

      if (data) {
        setData(dataResponse);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchListOfPost();
  }, []);
  console.log(data);
  return (
    <View style={styles.mainContainer}>
      <Text>DataFechingDemo</Text>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}: {item: Post}) => (
            <View style={styles.flatListItemContainer}>
              <Text> ID : {item.id}</Text>
              <Text> Title : {item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default DataFechingDemo;

const styles = StyleSheet.create({
  flatListItemContainer: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  mainContainer: {
    marginBottom: 20,
  },
});
