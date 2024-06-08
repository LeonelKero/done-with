import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

const DWText = ({ children, customStyle = {} }) => {
  return <Text style={[styles.text, customStyle]} numberOfLines={1}>{children}</Text>;
};

export default DWText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
