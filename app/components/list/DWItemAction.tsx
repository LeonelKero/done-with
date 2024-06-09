import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import color from "../../config/color";

interface Props {
  actionName: "Delete" | "Archive";
  iconName: any;
  iconSize: number;
  iconColor: string;
  onPress: () => void;
}

const DWItemAction = ({
  actionName,
  iconName,
  iconSize,
  iconColor,
  onPress,
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              actionName === "Delete" ? color.deepRed : color.lightBlue,
          },
        ]}
      >
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DWItemAction;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    backgroundColor: color.deepRed,
  },
});
