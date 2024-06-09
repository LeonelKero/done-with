import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import color from "../../config/color";
import DWText from "../text/DWText";

const DWEmptyItem = () => (
  <View style={styles.container}>
    <MaterialCommunityIcons name="iobroker" size={60} color={color.gray} />
    <DWText customStyle={styles.message}>No data available!</DWText>
  </View>
);

export default DWEmptyItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: color.secondary,
    height: 500
  },
  message:{
    fontSize: 24,
    padding: 16,
    color: color.gray
  }
});
