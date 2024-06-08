import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

const RootContainer = (props) => {
  return <SafeAreaView style={styles.root}>{props.children}</SafeAreaView>;
};

export default RootContainer;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
  },
});
