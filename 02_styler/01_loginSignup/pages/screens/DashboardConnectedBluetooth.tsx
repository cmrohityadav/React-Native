import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DashboardConnectedBluetooth = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.dashboardConnectedBluetooth}>
      <Text style={[styles.econovr, styles.econovrTypo]}>EconoVR</Text>
      <Image
        style={[
          styles.dashboardConnectedBluetoothChild,
          styles.dashboardLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={[styles.dashboardConnectedBluetoothItem, styles.dashboardLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={[
          styles.dashboardConnectedBluetoothInner,
          styles.rectangleIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[
          styles.dashboardConnectedBluetoothChild1,
          styles.dashboardChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Image
        style={[
          styles.dashboardConnectedBluetoothChild2,
          styles.dashboardChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Text style={[styles.vRaftedRealms, styles.healvrTypo]}>
        V-Rafted Realms
      </Text>
      <Text style={[styles.healvr, styles.healvrTypo]}>HealVR</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.vrconnect, styles.aerovrTypo]}>VRConnect</Text>
      <Text style={[styles.architourvr, styles.tourvistaTypo]}>
        ArchitourVR
      </Text>
      <Text style={[styles.tourvista, styles.tourvistaTypo]}>TourVista</Text>
      <Text style={[styles.aerovr, styles.aerovrTypo]}>AeroVR</Text>
      <Pressable
        style={styles.groupParent}
        onPress={() => navigation.navigate("Dashboard2")}
      >
        <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.rectangleLayout]} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.rectangleLayout]} />
        </View>
        <View style={[styles.rectangleFrame, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.rectangleLayout]} />
        </View>
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={[styles.econovr1, styles.econovrTypo]}>EconoVR</Text>
      <Image
        style={styles.setting11}
        resizeMode="cover"
        source={require("../assets/setting-1-1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChild1Layout]}>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild2, styles.groupLayout]} />
          <Text style={[styles.connectedToBluetooth, styles.healvrTypo]}>
            Connected to Bluetooth
          </Text>
          <Image
            style={styles.bluetooth1Icon}
            resizeMode="cover"
            source={require("../assets/bluetooth-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  econovrTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.pacificoRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  dashboardLayout: {
    height: 100,
    width: 100,
    top: 129,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleIconLayout: {
    top: 279,
    height: 100,
    width: 100,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  dashboardChildLayout: {
    top: 429,
    height: 100,
    width: 100,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  healvrTypo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  aerovrTypo: {
    top: 537,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  tourvistaTypo: {
    top: 233,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleLayout: {
    height: 2,
    width: 20,
    left: 0,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 0,
    top: 0,
  },
  groupChild1Layout: {
    height: 289,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 62,
    width: 320,
    position: "absolute",
  },
  econovr: {
    top: 8,
    left: 51,
  },
  dashboardConnectedBluetoothChild: {
    left: 54,
  },
  dashboardConnectedBluetoothItem: {
    left: 219,
  },
  dashboardConnectedBluetoothInner: {
    left: 54,
  },
  rectangleIcon: {
    left: 219,
  },
  dashboardConnectedBluetoothChild1: {
    left: 219,
  },
  dashboardConnectedBluetoothChild2: {
    left: 54,
  },
  vRaftedRealms: {
    top: 387,
    left: 59,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  healvr: {
    top: 384,
    left: 249,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  rectangleView: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 50,
    width: 360,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vrconnect: {
    left: 241,
  },
  architourvr: {
    left: 237,
  },
  tourvista: {
    left: 78,
  },
  aerovr: {
    left: 83,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    top: 0,
    height: 2,
  },
  rectangleWrapper: {
    top: 0,
    height: 2,
  },
  rectangleContainer: {
    top: 6,
  },
  rectangleFrame: {
    top: 12,
  },
  groupParent: {
    top: 17,
    left: 12,
    height: 14,
    width: 20,
    position: "absolute",
  },
  ellipseIcon: {
    width: 200,
    height: 200,
    position: "absolute",
  },
  econovr1: {
    top: 7,
    left: 54,
  },
  setting11: {
    top: 14,
    left: 324,
    width: 24,
    height: 24,
    position: "absolute",
  },
  groupChild1: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    height: 289,
    top: 0,
  },
  groupChild2: {
    backgroundColor: "#06cc1a",
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
    width: 320,
  },
  connectedToBluetooth: {
    top: 20,
    left: 67,
    fontSize: FontSize.size_base,
  },
  bluetooth1Icon: {
    top: 15,
    left: 19,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rectangleGroup: {
    top: 19,
    left: 20,
  },
  rectangleParent: {
    top: 351,
  },
  dashboardConnectedBluetooth: {
    backgroundColor: Color.colorDarkgray,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default DashboardConnectedBluetooth;
