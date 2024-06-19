import React from "react";
import { StyleSheet } from "react-native";
import color from "../../config/color";
import DWText from "../text/DWText";

interface Props {
  message: string;
  isVisible: boolean;
}

const DWErrorText = ({ message, isVisible }: Props) => {
  if (!message || !isVisible) return null;

  return <DWText customStyle={styles.error}>{message}</DWText>;
};

export default DWErrorText;

const styles = StyleSheet.create({
  error: {
    color: color.deepRed,
    fontSize: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});
