import React from "react";
import { View, Text, ImageBackground } from "react-native";

function App() {
  return (
    <ImageBackground
      source={{ uri: "https://picsum.photos/400/300" }}
      style={{ width: 300, height: 200, justifyContent: "center" }}
    >
      <Text style={{ color: "white", fontSize: 20 }}>
        Hello on Image 😄
      </Text>
    </ImageBackground>
  );
}

export default App;