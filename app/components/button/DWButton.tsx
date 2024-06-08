import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import color from "../../config/color";
import DWText from "../text/DWText";

const DWButton = ({ btnText, customStyle, handleSignInPressed }) => {
  return (
    <TouchableHighlight
      style={[styles.container, customStyle]}
      onPress={handleSignInPressed}
    >
      <DWText customStyle={styles.txt}>{btnText}</DWText>
    </TouchableHighlight>
  );
};

export default DWButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lightBlue,
    borderRadius: 25,
    padding: 8,
  },
  txt: {
    color: color.white,
    width: "100%",
    textAlign: "center",
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 18,
  },
});
