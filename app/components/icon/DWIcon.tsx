import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import color from "../../config/color";

interface Props {
  icon: ReactNode;
  customstyle?: {};
}

const DWIcon = ({ icon, customstyle = {} }: Props) => {
  return <View style={[styles.container, customstyle]}>{icon}</View>;
};

export default DWIcon;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.lightGray,
    backgroundColor: color.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
