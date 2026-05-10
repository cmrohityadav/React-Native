import { Pressable, Text, View } from "react-native";

export default function Index() {

  const pingserver=async()=>{
    const res= await fetch("http://192.168.0.224:3000");
    const data=await res.text();
    console.log(data)
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable onPress={pingserver}>
        <Text>Ping Server</Text>
      </Pressable>
    </View>
  );
}
