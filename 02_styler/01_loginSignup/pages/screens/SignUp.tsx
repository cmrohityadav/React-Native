import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUp}>
      <Image
        style={styles.unsplashhi6gyPWbiIcon}
        resizeMode="cover"
        source={require("../assets/unsplashhi6gypwbi.png")}
      />
      <View style={[styles.signUpChild, styles.signUpChildShadowBox]} />
      <View style={[styles.econovrParent, styles.emailChildLayout]}>
        <Text style={styles.econovr}>EconoVR</Text>
        <Text
          style={[styles.signUpTo, styles.textTypo]}
        >{`Sign Up to create an account `}</Text>
        <Pressable
          style={styles.alreadyHaveAnContainer}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text style={styles.textTypo}>
            <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
            <Text style={styles.login}> Login</Text>
          </Text>
        </Pressable>
        <View style={[styles.email, styles.emailLayout]}>
          <Text style={[styles.emailAddress, styles.textTypo]}>
            Email address
          </Text>
          <View style={[styles.emailChild, styles.emailChildLayout]} />
        </View>
        <View style={[styles.username, styles.emailLayout]}>
          <Text style={[styles.emailAddress, styles.textTypo]}>Username</Text>
          <View style={[styles.emailChild, styles.emailChildLayout]} />
        </View>
        <View style={[styles.rectangleParent, styles.frameChildLayout]}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <Text style={styles.submit}>SUBMIT</Text>
        </View>
        <View style={[styles.password, styles.emailLayout]}>
          <Text style={[styles.password1, styles.textTypo]}>Password</Text>
          <View style={[styles.emailChild, styles.emailChildLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpChildShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  emailChildLayout: {
    width: 233,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  emailLayout: {
    height: 20,
    width: 232,
    position: "absolute",
  },
  frameChildLayout: {
    height: 40,
    width: 232,
    left: 0,
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
  signUpChild: {
    top: 170,
    left: 40,
    width: 280,
    height: 391,
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  econovr: {
    left: 51,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pacificoRegular,
    color: Color.colorBlack,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  signUpTo: {
    top: 62,
    left: 39,
    color: Color.colorDimgray,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.colorDimgray,
  },
  login: {
    color: Color.colorGray_300,
  },
  alreadyHaveAnContainer: {
    left: 32,
    top: 331,
    position: "absolute",
  },
  emailAddress: {
    left: 1,
    color: Color.colorDimgray,
    top: 0,
    position: "absolute",
  },
  emailChild: {
    top: 20,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    height: 1,
    left: 0,
  },
  email: {
    top: 150,
    left: 1,
  },
  username: {
    top: 107,
    left: 0,
  },
  frameChild: {
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_xl,
    top: 0,
  },
  submit: {
    top: 13,
    left: 95,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 255,
  },
  password1: {
    color: Color.colorDimgray,
    left: 0,
    top: 0,
    position: "absolute",
  },
  password: {
    top: 193,
    left: 1,
  },
  econovrParent: {
    top: 184,
    left: 64,
    height: 345,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  signUp: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;
