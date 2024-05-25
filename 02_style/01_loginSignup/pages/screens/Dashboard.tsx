import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.dashboard}>
      <Text style={[styles.econovr, styles.econovrTypo]}>EconoVR</Text>
      <Image
        style={[styles.dashboardChild, styles.dashboardLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={[styles.dashboardItem, styles.dashboardLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={[styles.dashboardInner, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.dashboardChild1, styles.dashboardChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Image
        style={[styles.dashboardChild2, styles.dashboardChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Text style={[styles.vRaftedRealms, styles.healvrTypo]}>
        V-Rafted Realms
      </Text>
      <Text style={[styles.healvr, styles.healvrTypo]}>HealVR</Text>
      <View style={[styles.rectangleView, styles.ellipseIconPosition]} />
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
      <Pressable
        style={styles.setting11}
        onPress={() => navigation.navigate("DashboardBluetooth")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/setting-1-1.png")}
        />
      </Pressable>
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
    borderRadius: Border.br_xl,
    top: 129,
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
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 0,
    top: 0,
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
  econovr: {
    top: 8,
    left: 51,
  },
  dashboardChild: {
    left: 54,
  },
  dashboardItem: {
    left: 219,
  },
  dashboardInner: {
    left: 54,
  },
  rectangleIcon: {
    left: 219,
  },
  dashboardChild1: {
    left: 219,
  },
  dashboardChild2: {
    left: 54,
  },
  vRaftedRealms: {
    top: 387,
    left: 59,
  },
  healvr: {
    top: 384,
    left: 249,
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
    width: 360,
    height: 50,
    backgroundColor: Color.colorWhite,
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
  },
  econovr1: {
    top: 7,
    left: 54,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  setting11: {
    left: 324,
    top: 14,
    width: 24,
    height: 24,
    position: "absolute",
  },
  dashboard: {
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Dashboard;
