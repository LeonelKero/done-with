import React, { ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import color from "../../config/color";

interface Props {
  Icon: ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

const DWIconButton = ({ Icon, disabled = false, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} disabled={disabled} onPress={onPress}>
        {Icon}
      </Pressable>
    </View>
  );
};

export default DWIconButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 8,
    margin: 3,
    width: 100,
    height: 100,
    backgroundColor: color.lightGray
  },
  btn: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
