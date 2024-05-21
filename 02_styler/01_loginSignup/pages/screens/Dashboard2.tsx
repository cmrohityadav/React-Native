import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Dashboard2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.dashboard2}>
      <View style={styles.dashboard2Child} />
      <Text style={[styles.econovr, styles.econovrTypo]}>EconoVR</Text>
      <Image
        style={[styles.dashboard2Item, styles.dashboard2Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={[styles.dashboard2Inner, styles.dashboard2Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={[styles.dashboard2Child1, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.dashboard2Child2, styles.dashboard2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Image
        style={[styles.dashboard2Child3, styles.dashboard2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Text style={[styles.vRaftedRealms, styles.healvrTypo]}>
        V-Rafted Realms
      </Text>
      <Text style={[styles.healvr, styles.healvrTypo]}>HealVR</Text>
      <Text style={[styles.vrconnect, styles.aerovrTypo]}>VRConnect</Text>
      <Text style={[styles.architourvr, styles.tourvistaTypo]}>
        ArchitourVR
      </Text>
      <Text style={[styles.tourvista, styles.tourvistaTypo]}>TourVista</Text>
      <Text style={[styles.aerovr, styles.aerovrTypo]}>AeroVR</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={styles.groupParent}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
          <View style={styles.groupLayout} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={styles.groupLayout} />
        </View>
      </Pressable>
      <Image
        style={[styles.dashboard2Child4, styles.dashboard2Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.ethanWilliams, styles.econovrTypo]}>
        Ethan Williams
      </Text>
      <View style={styles.lineView} />
      <Pressable
        style={[styles.rectangleParent, styles.groupInnerLayout]}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={styles.logout}>LOGOUT</Text>
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
  dashboard2Layout: {
    height: 100,
    width: 100,
    position: "absolute",
  },
  rectangleIconLayout: {
    top: 279,
    height: 100,
    width: 100,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  dashboard2ChildLayout: {
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
    transform: [
      {
        rotate: "45deg",
      },
    ],
    height: 2,
    width: 20,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 40,
    width: 180,
    position: "absolute",
  },
  dashboard2Child: {
    backgroundColor: Color.colorWhite,
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  econovr: {
    top: 8,
    left: 51,
  },
  dashboard2Item: {
    borderRadius: Border.br_xl,
    left: 54,
    top: 129,
    height: 100,
    width: 100,
  },
  dashboard2Inner: {
    left: 219,
    borderRadius: Border.br_xl,
    top: 129,
    height: 100,
    width: 100,
  },
  rectangleIcon: {
    left: 54,
  },
  dashboard2Child1: {
    left: 219,
  },
  dashboard2Child2: {
    left: 219,
  },
  dashboard2Child3: {
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
  ellipseIcon: {
    width: 490,
    height: 663,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    transform: [
      {
        rotate: "45deg",
      },
    ],
    height: 2,
    width: 20,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    left: 1,
    top: 0,
  },
  rectangleContainer: {
    top: 14,
    left: 0,
  },
  groupParent: {
    top: 16,
    left: 14,
    width: 16,
    height: 16,
    position: "absolute",
  },
  dashboard2Child4: {
    top: 50,
    left: 59,
  },
  ethanWilliams: {
    top: 153,
    left: 45,
  },
  lineView: {
    top: 210,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 262,
    height: 1,
    left: 13,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  logout: {
    top: 13,
    left: 65,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_100,
    width: 51,
    height: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 511,
    left: 13,
  },
  dashboard2: {
    backgroundColor: "#949494",
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Dashboard2;
