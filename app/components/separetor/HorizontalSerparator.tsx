import React from "react";
import { StyleSheet, View } from "react-native";
import color from "../../config/color";

const HorizontalSerparator = () => <View style={styles.separetor} />;

export default HorizontalSerparator;

const styles = StyleSheet.create({
  separetor: {
    width: "100%",
    backgroundColor: color.lightGray,
    height: 1,
  },
});
