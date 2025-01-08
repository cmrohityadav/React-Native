import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const LoginPage21 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginPage2}>
      <Image
        style={styles.unsplashhi6gyPWbiIcon}
        resizeMode="cover"
        source={require("../assets/unsplashhi6gypwbi.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("LoginPage2")}
        >
          <Text style={[styles.forgotPassword1, styles.textTypo]}>
            Forgot Password?
          </Text>
        </Pressable>
        <Text style={[styles.econovr, styles.text1Clr]}>EconoVR</Text>
        <Text style={[styles.signInTo, styles.textTypo]}>
          Sign in to continue using EconoVR
        </Text>
        <Pressable
          style={styles.dontHaveAnContainer}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={[styles.text, styles.textTypo]}>
            <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
            <Text style={styles.signUp}> Sign Up</Text>
          </Text>
        </Pressable>
        <View style={[styles.email, styles.emailLayout]}>
          <Text style={[styles.examplegmailcom, styles.text1Clr]}>
            example@gmail.com
          </Text>
          <View style={styles.emailChild} />
        </View>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.login, styles.textTypo]}>LOGIN</Text>
        </Pressable>
        <View style={[styles.password, styles.emailLayout]}>
          <Text style={[styles.text1, styles.text1Clr]}>12345678</Text>
          <View style={styles.emailChild} />
        </View>
      </View>
      <Image
        style={styles.eye1Icon}
        resizeMode="cover"
        source={require("../assets/eye-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  text1Clr: {
    color: Color.colorBlack,
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
  unsplashhi6gyPWbiIcon: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    width: 360,
    height: 320,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: 391,
    width: 280,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  forgotPassword1: {
    color: Color.colorRoyalblue,
    fontFamily: FontFamily.robotoRegular,
  },
  forgotPassword: {
    left: 160,
    top: 218,
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
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.colorDimgray,
  },
  signUp: {
    color: Color.colorGray_300,
  },
  text: {
    fontFamily: FontFamily.robotoRegular,
  },
  dontHaveAnContainer: {
    left: 56,
    top: 337,
    position: "absolute",
  },
  examplegmailcom: {
    left: 1,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
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
    position: "absolute",
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
  login: {
    top: 13,
    left: 98,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_100,
    position: "absolute",
  },
  rectangleGroup: {
    top: 254,
    left: 24,
  },
  text1: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    top: 0,
    left: 0,
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
  eye1Icon: {
    top: 354,
    left: 278,
    width: 18,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  loginPage2: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginPage21;
