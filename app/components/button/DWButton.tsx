import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import color from "../../config/color";
import DWText from "../text/DWText";

interface Props {
  btnText: string;
  customStyle?: {};
  handlePress: () => void;
  disabled?: boolean;
}

const DWButton = ({
  btnText,
  customStyle,
  handlePress,
  disabled = true,
}: Props) => {
  return (
    <TouchableHighlight
      disabled={disabled}
      style={[
        styles.container,
        customStyle,
        disabled ? { backgroundColor: color.gray } : {},
      ]}
      onPress={handlePress}
    >
      <DWText customStyle={styles.txt}>{btnText}</DWText>
    </TouchableHighlight>
  );
};

export default DWButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lightBlue,
    borderRadius: 25,
    padding: 8,
  },
  txt: {
    color: color.white,
    width: "100%",
    textAlign: "center",
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 18,
  },
});
