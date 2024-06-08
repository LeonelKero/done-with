import React from "react";
import { StyleSheet, Text, View } from "react-native";

import DWButton from "../../components/button/DWButton";
import color from "../../config/color";

const WelcomeScreen = () => {
  return (
    <>
      <View style={styles.root}>
        <View style={styles.logo}>
          <View style={styles.mainLogo}>
            <Text style={[styles.text, styles.done]}>DONE</Text>
            <Text style={[styles.text, styles.with]}>WITH</Text>
          </View>
          {/* <Text style={[styles.slogan]}>No more bad side effect!</Text> */}
        </View>
        <View style={styles.actionButtonGroup}>
          <DWButton
            btnText={"Sign In"}
            customStyle={{}}
            handleSignInPressed={() => console.log("Sign In")}
          />
          <DWButton
            btnText={"Register"}
            customStyle={styles.btnRegister}
            handleSignInPressed={() => console.log("Register")}
          />
        </View>
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.primary,
    // justifyContent: "space-between",
    // alignItems: "center",
    padding: 16,
  },
  actionButtonGroup: {
    // borderColor: color.third,
    // borderWidth: 2,
    width: "100%",
    position: "absolute",
    bottom: 64,
    start: 16,
    padding: 16,
  },
  btnRegister: {
    marginTop: 16,
    backgroundColor: color.secondary,
  },
  done: {
    borderColor: color.lightGray,
    borderWidth: 2,
    paddingStart: 8,
    paddingEnd: 8,
    fontWeight: 600,
  },
  logo: {
    // borderColor: color.lightGray,
    // borderWidth: 2,
    alignItems: "center",
    padding: 8,
    position: "absolute",
    top: "35%",
    start: "25%",
  },
  mainLogo: {
    flexDirection: "row",
  },
  slogan: {
    color: color.lightGray,
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 8,
  },
  text: {
    color: color.lightGray,
    fontSize: 32,
    padding: 2,
    fontWeight: 300,
  },
  with: {
    paddingStart: 8,
  },
});
