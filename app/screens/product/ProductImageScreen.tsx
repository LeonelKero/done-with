import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import color from "../../config/color";
import RootContainer from "../RootContainer";
import { MaterialCommunityIcons as MCIcons } from "@expo/vector-icons";

const ProductImageScreen = () => {
  return (
    <RootContainer>
      <View style={styles.container}>
        <View style={styles.actions}>
          <View style={[styles.box]}>
            <MCIcons name="close" size={40} color={color.white} />
          </View>
          <View style={[styles.right, styles.box]}>
            <MCIcons name="trash-can-outline" size={40} color={color.deepRed} />
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
    </RootContainer>
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
    width: 60,
    height: 60,
    // backgroundColor: color.third,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    aspectRatio: 1,
    width: "100%",
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
