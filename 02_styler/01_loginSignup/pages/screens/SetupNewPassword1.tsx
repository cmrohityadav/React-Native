import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SetupNewPassword1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.setupNewPassword1}>
      <Image
        style={[styles.unsplashhi6gyPWbiIcon, styles.emailChildPosition]}
        resizeMode="cover"
        source={require("../assets/unsplashhi6gypwbi.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.econovr}>EconoVR</Text>
        <Text style={[styles.setupNewPassword, styles.newTypo]}>
          Setup new password
        </Text>
        <View style={[styles.email, styles.emailLayout]}>
          <Text style={[styles.newPassword, styles.newTypo]}>New Password</Text>
          <View style={[styles.emailChild, styles.emailChildPosition]} />
        </View>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={styles.submit}>SUBMIT</Text>
        </Pressable>
        <View style={[styles.password, styles.emailLayout]}>
          <Text style={[styles.confirmNewPassword, styles.newTypo]}>
            Confirm New Password
          </Text>
          <View style={[styles.emailChild, styles.emailChildPosition]} />
        </View>
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("LoginPage21")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout]}
        onPress={() => navigation.navigate("LoginPage21")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  emailChildPosition: {
    position: "absolute",
    left: 0,
  },
  groupChildLayout: {
    height: 391,
    width: 280,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  newTypo: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  emailLayout: {
    height: 20,
    width: 232,
    left: 25,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 232,
    position: "absolute",
  },
  wrapperLayout: {
    height: 17,
    width: 18,
    left: 278,
    position: "absolute",
  },
  unsplashhi6gyPWbiIcon: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    width: 360,
    height: 320,
    left: 0,
    top: 0,
  },
  groupChild: {
    height: 391,
    width: 280,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  econovr: {
    top: 14,
    left: 75,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pacificoRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  setupNewPassword: {
    top: 80,
    left: 84,
  },
  newPassword: {
    left: 1,
    top: 0,
  },
  emailChild: {
    top: 20,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 233,
    height: 1,
    left: 0,
  },
  email: {
    top: 132,
  },
  groupItem: {
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  submit: {
    top: 13,
    left: 94,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    top: 254,
    left: 24,
  },
  confirmNewPassword: {
    left: 0,
    top: 0,
  },
  password: {
    top: 183,
  },
  rectangleParent: {
    top: 170,
    left: 40,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 299,
  },
  container: {
    top: 349,
  },
  setupNewPassword1: {
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SetupNewPassword1;
