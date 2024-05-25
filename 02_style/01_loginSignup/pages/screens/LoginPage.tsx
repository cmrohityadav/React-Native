import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginPage}>
      <Image
        style={[styles.unsplashhi6gyPWbiIcon, styles.password1Position]}
        resizeMode="cover"
        source={require("../assets/unsplashhi6gypwbi.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.forgotPassword, styles.passwordTypo]}>
          Forgot Password?
        </Text>
        <Text style={styles.econovr}>EconoVR</Text>
        <Text style={[styles.signInTo, styles.passwordTypo]}>
          Sign in to continue using EconoVR
        </Text>
        <Pressable
          style={styles.dontHaveAnContainer}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={[styles.text, styles.passwordTypo]}>
            <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
            <Text style={styles.signUp}> Sign Up</Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.email, styles.emailLayout]}
          onPress={() => navigation.navigate("IncorrectEmail")}
        >
          <Text style={[styles.emailAddress, styles.passwordTypo]}>
            {" "}
            Email address
          </Text>
          <View style={[styles.emailChild, styles.password1Position]} />
        </Pressable>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={styles.login}>LOGIN</Text>
        </View>
        <View style={[styles.password, styles.emailLayout]}>
          <Text style={[styles.password1, styles.passwordTypo]}>Password</Text>
          <View style={[styles.emailChild, styles.password1Position]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  password1Position: {
    left: 0,
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
  passwordTypo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
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
    top: 0,
  },
  groupChild: {
    height: 391,
    width: 280,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  forgotPassword: {
    top: 218,
    left: 160,
    color: Color.colorRoyalblue,
    textAlign: "left",
    position: "absolute",
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
  signInTo: {
    top: 80,
    left: 52,
    color: Color.colorDimgray,
    textAlign: "left",
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
  },
  dontHaveAnContainer: {
    left: 56,
    top: 337,
    position: "absolute",
  },
  emailAddress: {
    left: 1,
    color: Color.colorDimgray,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  emailChild: {
    top: 20,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 233,
    height: 1,
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
    left: 0,
    position: "absolute",
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
  loginPage: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginPage;
