import { ScrollView, Text } from "react-native";
function HomeScreen() {
  return (
    <ScrollView>
      {[...Array(30)].map((_, indx) => (
        <Text key={indx} style={{ fontSize: 24 }}>
          Hello from user {indx + 1}
        </Text>
      ))}
    </ScrollView>
  );
}
export default HomeScreen;
