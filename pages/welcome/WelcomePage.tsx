import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootPage from "../RootContainer";

const WelcomePage = () => {
  return (
    <RootPage>
      <View style={styles.root}>
        <View style={styles.logo}>
          <View style={styles.mainLogo}>
            <Text style={[styles.text]}>DONE</Text>
            <Text style={[styles.text]}>WITH</Text>
          </View>
          <Text style={[styles.slogan]}>No More Bad Side Effect</Text>
        </View>
      </View>
    </RootPage>
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
  logo: {
    alignItems: 'center',
    padding: 8
  },
  mainLogo: {
    flexDirection: "row",
  },
  slogan: {
    color: "white",
    fontSize: 18
  },
  text: {
    color: "#fff",
    fontSize: 32,
    padding: 2
  },
});
