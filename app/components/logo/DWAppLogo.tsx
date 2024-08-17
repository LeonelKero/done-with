import React from "react";
import { StyleSheet, Text, View } from "react-native";
import color from "../../config/color";

interface Props {
  logo?: {};
  text?: {};
  done?: {};
}

// TODO: Add custon sub slogan below the app's namw

const DWAppLogo = ({ logo = {}, text = {}, done = {} }: Props) => {
  return (
    <View style={[styles.logo, logo]}>
      <View style={styles.mainLogo}>
        <Text style={[styles.text, text, styles.done, done]}>DONE</Text>
        <Text style={[styles.text, text, styles.with]}>WITH</Text>
      </View>
      {/* <Text style={[styles.slogan]}>No more bad side effect!</Text> */}
    </View>
  );
};

export default DWAppLogo;

const styles = StyleSheet.create({
  done: {
    borderColor: color.lightGray,
    borderWidth: 2,
    paddingStart: 8,
    paddingEnd: 8,
    fontWeight: 600,
  },
  mainLogo: {
    flexDirection: "row",
  },
  logo: {
    // borderColor: color.lightGray,
    // borderWidth: 2,
    alignItems: "center",
    padding: 8,
    position: "absolute",
    top: "35%",
    start: "25%",
  },
  text: {
    color: color.lightGray,
    fontSize: 32,
    padding: 2,
    fontWeight: 300,
  },
  with: {
    paddingStart: 8,
  },
});
