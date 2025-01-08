import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IncorrectEmail = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.incorrectEmail}>
      <Image
        style={[styles.unsplashhi6gyPWbiIcon, styles.password1Position]}
        resizeMode="cover"
        source={require("../assets/unsplashhi6gypwbi.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <Text style={[styles.econovr, styles.econovrClr]}>EconoVR</Text>
        <Text style={styles.signInTo}>Sign in to continue using EconoVR</Text>
        <Pressable
          style={styles.dontHaveAnContainer}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.text}>
            <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
            <Text style={styles.signUp}> Sign Up</Text>
          </Text>
        </Pressable>
        <View style={[styles.email, styles.emailPosition]}>
          <Text style={[styles.abcdefghijklmnopqrstuvwxyz, styles.econovrClr]}>
            abcdefghijklmnopqrstuvwxyz
          </Text>
          <Text style={styles.enterAValid}>Enter a valid Email address</Text>
          <View style={[styles.emailChild, styles.childPosition]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={styles.login}>LOGIN</Text>
        </View>
        <Pressable
          style={[styles.password, styles.emailPosition]}
          onPress={() => navigation.navigate("IncorrectPassword")}
        >
          <Text style={[styles.password1, styles.password1Position]}>
            Password
          </Text>
          <View style={[styles.passwordChild, styles.childPosition]} />
        </Pressable>
      </View>
      <Pressable
        style={styles.wrapper}
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
  password1Position: {
    left: 0,
    top: 0,
    position: "absolute",
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
  econovrClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  emailPosition: {
    width: 232,
    left: 25,
    position: "absolute",
  },
  childPosition: {
    height: 1,
    width: 233,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 20,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 232,
    position: "absolute",
  },
  unsplashhi6gyPWbiIcon: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    width: 360,
    height: 320,
  },
  groupChild: {
    height: 391,
    width: 280,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  forgotPassword: {
    top: 222,
    left: 160,
    color: Color.colorRoyalblue,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  econovr: {
    top: 14,
    left: 75,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pacificoRegular,
  },
  signInTo: {
    top: 80,
    left: 52,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.colorDimgray,
  },
  signUp: {
    color: Color.colorGray_300,
  },
  text: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  dontHaveAnContainer: {
    left: 56,
    top: 337,
    position: "absolute",
  },
  abcdefghijklmnopqrstuvwxyz: {
    left: 1,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    top: 0,
    color: Color.colorBlack,
  },
  enterAValid: {
    top: 26,
    left: 5,
    fontSize: FontSize.size_3xs,
    color: "#ff0303",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  emailChild: {
    borderColor: "#ff0606",
  },
  email: {
    top: 132,
    height: 38,
  },
  groupItem: {
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  login: {
    top: 13,
    left: 98,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_100,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectangleGroup: {
    top: 254,
    left: 24,
  },
  password1: {
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  passwordChild: {
    borderColor: Color.colorBlack,
  },
  password: {
    top: 183,
    height: 20,
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
    left: 278,
    top: 351,
    width: 18,
    height: 17,
    position: "absolute",
  },
  incorrectEmail: {
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IncorrectEmail;
