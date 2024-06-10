import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

const RootContainer = ({ custonStyle = {}, children }) => {
  return (
    <SafeAreaView style={[styles.root, custonStyle]}>{children}</SafeAreaView>
  );
};

export default RootContainer;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#f0f0f0",
  },
});
