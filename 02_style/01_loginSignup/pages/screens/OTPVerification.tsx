import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OTPVerification = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.otpVerification}>
      <Image
        style={styles.unsplashhi6gyPWbiIcon}
        resizeMode="cover"
        source={require("../assets/unsplashhi6gypwbi.png")}
      />
      <View style={styles.otpVerificationChild} />
      <Text style={[styles.enterTheOtpContainer, styles.submitFlexBox]}>
        <Text style={styles.enterTheOtp}>Enter the OTP sent to ****</Text>
        <Text style={styles.plegmailcom}>ple@gmail.com</Text>
      </Text>
      <View style={styles.econovrParent}>
        <Text style={[styles.econovr, styles.submitFlexBox]}>EconoVR</Text>
        <Pressable
          style={[styles.rectangleParent, styles.groupChildLayout]}
          onPress={() => navigation.navigate("SetupNewPassword1")}
        >
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.submit, styles.submitFlexBox]}>SUBMIT</Text>
        </Pressable>
        <Text style={[styles.verifyYourEmail, styles.submitFlexBox]}>
          Verify your Email adddress
        </Text>
      </View>
      <Image
        style={styles.otpVerificationItem}
        resizeMode="cover"
        source={require("../assets/group-10.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>4</Text>
      <Text style={[styles.text1, styles.textTypo]}>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  submitFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 40,
    width: 232,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    top: 339,
    textAlign: "left",
    color: Color.colorBlack,
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
  otpVerificationChild: {
    top: 170,
    left: 40,
    width: 280,
    height: 391,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  enterTheOtp: {
    fontFamily: FontFamily.interRegular,
  },
  plegmailcom: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  enterTheOtpContainer: {
    top: 281,
    left: 59,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  econovr: {
    left: 51,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pacificoRegular,
    color: Color.colorBlack,
    textAlign: "left",
    top: 0,
  },
  groupChild: {
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_xl,
    height: 40,
    top: 0,
  },
  submit: {
    top: 13,
    left: 95,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
  },
  rectangleParent: {
    top: 243,
  },
  verifyYourEmail: {
    top: 62,
    left: 45,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDimgray,
    fontSize: FontSize.size_xs,
  },
  econovrParent: {
    top: 184,
    left: 64,
    height: 283,
    width: 232,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  otpVerificationItem: {
    top: 364,
    left: 74,
    width: 212,
    height: 2,
    position: "absolute",
  },
  text: {
    left: 84,
  },
  text1: {
    left: 131,
  },
  otpVerification: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default OTPVerification;
