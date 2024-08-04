import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

interface Props {
  children: string;
  numberOfLines?: number;
  customStyle?: object;
}

const DWText = ({ children, numberOfLines = 1, customStyle = {} }: Props) => {
  return (
    <Text style={[styles.text, customStyle]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default DWText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
