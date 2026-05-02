import React from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function App() {
  const STOCK_DATA = Array.from({ length: 30 }, (_, index) => ({
    id: index.toString(),
    name: `Stock ${index + 1}`,
    price: 1000 + index * 50,
  }));

  const renderItemUIFun = ({ item }) => {
    return (
      <View
        style={{
          padding: 15,
          margin: 10,
          backgroundColor: "#eee",
          borderRadius: 10,
        }}
      >
        <Text>{item.name}</Text>
        <Text>₹ {item.price}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={STOCK_DATA}
        renderItem={renderItemUIFun}
        keyExtractor={(item) => item.id}


        ListHeaderComponent={<Text>Top Stocks</Text>}
        ListFooterComponent={<Text>End of List</Text>}
        // horizontal

      />
    </SafeAreaView>
  );
}

export default App;
