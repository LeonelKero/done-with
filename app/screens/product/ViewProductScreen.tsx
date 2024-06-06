import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import RootPage from "../RootContainer";
import color from "../../config/color";

const ProductImageScreen = () => {
  return (
    <RootPage>
      <View style={styles.container}>
        <View style={styles.actions}>
          <View style={[styles.box]}>
            <Text style={styles.left}>L</Text>
          </View>
          <View style={[styles.right, styles.box]}>
            <Text>R</Text>
          </View>
        </View>
        <View style={styles.viewer}>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={require("../../assets/nature.jpeg")}
          />
        </View>
      </View>
    </RootPage>
  );
};

export default ProductImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    padding: 8,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: color.white,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
  left: {},
  right: {},
  viewer: {
    marginTop: 32,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
