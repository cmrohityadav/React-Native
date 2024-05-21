import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const LoginPage2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginPage2}>
      <Image
        style={[styles.unsplashhi6gyPWbiIcon, styles.emailChildPosition]}
        resizeMode="cover"
        source={require("../assets/unsplashhi6gypwbi.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.econovr}>EconoVR</Text>
        <Text
          style={[styles.enterTheEmail, styles.emailTypo]}
        >{`Enter the email address associated with your account and we’ll send an email with instructions to reset your password `}</Text>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("OTPVerification")}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={styles.sendOtp}>SEND OTP</Text>
        </Pressable>
      </Pressable>
      <View style={styles.email}>
        <Text style={[styles.emailAddress, styles.emailTypo]}>
          {" "}
          Email address
        </Text>
        <View style={[styles.emailChild, styles.emailChildPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailChildPosition: {
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
  emailTypo: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
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
  econovr: {
    top: 14,
    left: 75,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pacificoRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  enterTheEmail: {
    top: 86,
    left: 25,
    width: 238,
  },
  groupItem: {
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  sendOtp: {
    top: 13,
    left: 87,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    top: 311,
    left: 24,
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
  emailAddress: {
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
  },
  email: {
    top: 346,
    left: 64,
    height: 20,
    width: 232,
    position: "absolute",
  },
  loginPage2: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginPage2;
