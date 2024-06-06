import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WelcomePage = () => {
  return (
    <>
      <View style={styles.root}>
        <View style={styles.logo}>
          <View style={styles.mainLogo}>
            <Text style={[styles.text, styles.done]}>DONE</Text>
            <Text style={[styles.text, styles.with]}>WITH</Text>
          </View>
          <Text style={[styles.slogan]}>No More Bad Side Effect</Text>
        </View>
      </View>
    </>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#01203f",
    justifyContent: "center",
    alignItems: "center",
  },
  done: {
    borderColor: "#fff",
    borderWidth: 2,
    paddingStart: 8,
    paddingEnd: 8,
  },
  logo: {
    alignItems: "center",
    padding: 8,
  },
  mainLogo: {
    flexDirection: "row",
  },
  slogan: {
    color: "white",
    fontSize: 18,
    marginTop: 8,
  },
  text: {
    color: "#fff",
    fontSize: 32,
    padding: 2,
  },
  with: {
    paddingStart: 8,
  },
});
