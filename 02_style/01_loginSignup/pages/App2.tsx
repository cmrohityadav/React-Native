const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import IncorrectPassword from "./screens/IncorrectPassword";
import SetupNewPassword1 from "./screens/SetupNewPassword1";
import OTPVerification from "./screens/OTPVerification";
import LoginPage2 from "./screens/LoginPage2";
import Dashboard2 from "./screens/Dashboard2";
import DashboardConnectedBluetooth from "./screens/DashboardConnectedBluetooth";
import DashboardBluetooth from "./screens/DashboardBluetooth";
import Dashboard from "./screens/Dashboard";
import LoginPage21 from "./screens/LoginPage21";
import IncorrectEmail from "./screens/IncorrectEmail";
import LoginPage from "./screens/LoginPage";
import SignUp from "./screens/SignUp";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IncorrectPassword"
              component={IncorrectPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetupNewPassword1"
              component={SetupNewPassword1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPVerification"
              component={OTPVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage2"
              component={LoginPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard2"
              component={Dashboard2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardConnectedBluetooth"
              component={DashboardConnectedBluetooth}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardBluetooth"
              component={DashboardBluetooth}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage21"
              component={LoginPage21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IncorrectEmail"
              component={IncorrectEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
