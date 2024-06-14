import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode, useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import color from "../../config/color";
import DWText from "../text/DWText";

interface Props {
  title: string;
  Icon: ReactNode;
  handlePress: () => void;
}

const DWPicker = ({ title, Icon }: Props) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const handlePress = () => setModalVisible(!isModalVisible);

  return (
    <>
      <Pressable onPress={handlePress}>
        <View style={styles.container}>
          <View style={styles.detail}>
            {Icon}
            <DWText customStyle={styles.text}>{title}</DWText>
          </View>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={color.softDark}
          />
        </View>
      </Pressable>
      <Modal
        visible={isModalVisible}
        transparent={false}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalTop}>
          <DWText>Choose category</DWText>
          <Pressable onPress={() => setModalVisible(false)}>
            <MaterialCommunityIcons
              name="close"
              size={24}
              color={color.softDark}
            />
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

export default DWPicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: color.white,
  },
  detail: {
    flexDirection: "row",
  },
  modalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 32,
  },
  text: {
    marginStart: 16,
  },
});
