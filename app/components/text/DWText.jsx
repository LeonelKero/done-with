import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

const DWText = ({ children, numberOfLines = 1, customStyle = {} }) => {
  return <Text style={[styles.text, customStyle]} numberOfLines={numberOfLines}>{children}</Text>;
};

export default DWText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
