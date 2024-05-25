import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IncorrectPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.incorrectPassword}>
      <Image
        style={styles.unsplashhi6gyPWbiIcon}
        resizeMode="cover"
        source={require("../assets/unsplashhi6gypwbi.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <Text style={styles.econovr}>EconoVR</Text>
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
          <Text style={[styles.examplegmailcom, styles.text1Position]}>
            example@gmail.com
          </Text>
          <View style={[styles.emailChild, styles.childLayout]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={styles.login}>LOGIN</Text>
        </View>
        <View style={[styles.password, styles.emailPosition]}>
          <Text style={[styles.text1, styles.text1Position]}>•••••••••••</Text>
          <View style={[styles.passwordChild, styles.childLayout]} />
        </View>
      </View>
      <Text style={styles.enterValidPassword}>Enter valid password</Text>
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
  emailPosition: {
    width: 232,
    left: 25,
    position: "absolute",
  },
  text1Position: {
    left: 1,
    color: Color.colorBlack,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  childLayout: {
    height: 1,
    width: 233,
    borderTopWidth: 1,
    borderStyle: "solid",
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
  forgotPassword: {
    top: 222,
    left: 159,
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
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
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
  examplegmailcom: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  emailChild: {
    top: 20,
    borderColor: Color.colorBlack,
  },
  email: {
    top: 132,
    height: 20,
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
  text1: {
    fontSize: 14,
    fontFamily: FontFamily.inika,
  },
  passwordChild: {
    top: 24,
    borderColor: Color.colorRed_100,
  },
  password: {
    top: 179,
    height: 24,
  },
  rectangleParent: {
    top: 169,
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
  enterValidPassword: {
    top: 378,
    left: 72,
    fontSize: FontSize.size_3xs,
    color: Color.colorRed_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 281,
    top: 351,
    width: 18,
    height: 17,
    position: "absolute",
  },
  incorrectPassword: {
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IncorrectPassword;
