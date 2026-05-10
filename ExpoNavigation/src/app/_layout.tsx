import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
     headerTintColor:"#fff",
     headerTitleAlign:"center"
    }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "orange",
          },
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerStyle: {
            backgroundColor: "rgba(81, 149, 245, 0.66)",
          },
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          title: "Detail",
          headerStyle: {
            backgroundColor: "rgba(27, 232, 41, 0.92)",
          },
        }}
      />
    </Stack>
  );
}
