import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, TouchableHighlight, View } from "react-native";
import color from "../../config/color";

interface Props {
  onPress: () => void;
}

const DWCreateFreedButton = ({ onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus" size={30} color={color.white} />
      </View>
    </Pressable>
  );
};

export default DWCreateFreedButton;

const styles = StyleSheet.create({
//   topContainer: {
//     overflow: "visible",
//     backgroundColor: color.white
//   },
  container: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: color.lightBlue,
    justifyContent: "center",
    borderWidth: 8,
    borderColor: color.lightGray,
    alignItems: "center",
    bottom: 24,
  },
});
