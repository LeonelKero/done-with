import React, { ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import color from "../../config/color";
import DWText from "../text/DWText";

interface Props {
  title: string;
  children: ReactNode;
  customStyle?: {};
  customTextStyle?: {};
  onPress: () => void;
}

const DWBasicItem = ({ title, children, customStyle,customTextStyle, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, customStyle]}>
        {children}
        <DWText customStyle={[styles.textStyle,customTextStyle]}>{title}</DWText>
      </View>
    </Pressable>
  );
};

export default DWBasicItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 2
  },
  textStyle: {
    padding: 8,
  },
});
