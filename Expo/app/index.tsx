import { useState } from "react";
import { View, Text,Button, Alert, Switch } from "react-native";
function HomeScreen(){
  const [enableSwitch,setEnableSwitch]=useState(false)
  const onToggleSwitch=()=>{
    setEnableSwitch((prev)=>!prev)
  }

  return (
    <View>
      <Text style={{fontSize:24}}>
        Hello Swati
      </Text>
      <Button
        title="Press to swati"
        onPress={()=>
          Alert.alert("This is Alert Ttitle","This is message ")
        }
      />
      <Switch
        onChange={onToggleSwitch}
        value={enableSwitch}

        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={enableSwitch ? "#f5dd4b" : "#f4f3f4"}
      />

      
    </View>
  );
}
export default HomeScreen;