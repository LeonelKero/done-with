import React from "react";
import { StyleSheet, View } from "react-native";

import DWButton from "../../components/button/DWButton";
import DWAppLogo from "../../components/logo/DWAppLogo";
import color from "../../config/color";

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.root}>
        <DWAppLogo logo={{}} text={{}} done={{}} />
        <View style={styles.actionButtonGroup}>
          <DWButton
            btnText={"Sign In"}
            disabled={false}
            customStyle={{}}
            handlePress={() => console.log("Sign In")}
          />
          <DWButton
            btnText={"Register"}
            customStyle={styles.btnRegister}
            disabled={false}
            handlePress={() => console.log("Register")}
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
    padding: 16,
  },
  actionButtonGroup: {
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
