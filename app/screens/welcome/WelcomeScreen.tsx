import React from "react";
import { StyleSheet, Text, View } from "react-native";

import DWButton from "../../components/button/DWButton";
import color from "../../config/color";
import DWAppLogo from "../../components/logo/DWAppLogo";

const WelcomeScreen = () => {
  return (
    <>
      <View style={styles.root}>
        <DWAppLogo logo={{}} text={{}} done={{}} />
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
  with: {
    paddingStart: 8,
  },
});
