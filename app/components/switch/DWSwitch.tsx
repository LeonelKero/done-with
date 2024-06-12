import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
import color from "../../config/color";
import DWText from "../text/DWText";

interface Props {
  text: string;
  getCurrentState: (cState: boolean) => void;
}

const DWSwitch = ({ text, getCurrentState }: Props) => {
  const [isEnabled, setEnabled] = useState(false);

  const handleValueChange = (recentState) => {
    setEnabled(recentState);
    getCurrentState(recentState);
  };

  return (
    <View style={styles.container}>
      <DWText customStyle={styles.text}>{text}</DWText>
      <Switch
        value={isEnabled}
        onValueChange={() => handleValueChange(!isEnabled)}
        trackColor={{ true: color.lightBlue, false: color.primary }}
      />
    </View>
  );
};

export default DWSwitch;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: color.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
    marginTop: 1,
  },
  text: {
    fontSize: 16,
  },
});
