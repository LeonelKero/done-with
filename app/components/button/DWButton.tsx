import React from "react";
import {
    StyleSheet,
    Text,
    TouchableHighlight
} from "react-native";
import color from "../../config/color";

const DWButton = ({ btnText, customStyle, handleSignInPressed }) => {
  return (
    <TouchableHighlight
      style={[styles.container, customStyle]}
      onPress={handleSignInPressed}
    >
      <Text style={styles.txt}>{btnText}</Text>
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
    fontSize: 18
  },
});
