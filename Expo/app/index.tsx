import React from "react";
import { View, Text, Pressable, Alert } from "react-native";

function App() {

  const handlePress = () => {
    Alert.alert("Pressed!", "Simple press hua");
  };

  const handleLongPress = () => {
    Alert.alert("Long Press!", "Button hold kiya");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      <Pressable
        onPress={handlePress}                 // normal tap
        onPressIn={() => console.log("Press In")}   // press start
        onPressOut={() => console.log("Press Out")} // press end

        onLongPress={handleLongPress}         // long press
        delayLongPress={5000}                  // long press delay (ms)
      
        
        disabled={false}                     // disable/enable
        hitSlop={10}                         // touch area bada karta hai
        pressRetentionOffset={10}            // finger thoda move kare to bhi press rahe
        android_ripple={{ color: "lightgray" }} // android ripple effect
        
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#555" : "#007bff",
          padding: 15,
          borderRadius: 10,
          opacity: pressed ? 0.7 : 1,
        })}
      >
        {({ pressed }) => (
          <Text style={{ color: "white", fontSize: 18 }}>
            {pressed ? "Pressed 😄" : "Press Me"}
          </Text>
        )}
      </Pressable>

    </View>
  );
}

export default App;