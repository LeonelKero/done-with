import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import color from "../../config/color";
import HorizontalSerparator from "../separetor/HorizontalSerparator";
import DWText from "../text/DWText";
import DWPickerItem from "./DWPickerItem";

interface Props {
  placeholder: string;
  Icon: ReactNode;
  pickerItems: PickerItems[];
  handlePress: () => void;
}

interface PickerItems {
  name: string;
  value: number;
  Icon: ReactNode;
}

const DWPicker = ({ placeholder, Icon, pickerItems }: Props) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const handlePress = () => setModalVisible(!isModalVisible);
  const [selectedCategory, setSelectedCategory] = useState<PickerItems>(
    pickerItems[0]
  );

  return (
    <>
      <Pressable onPress={handlePress}>
        <View style={styles.container}>
          <View style={styles.detail}>
            {selectedCategory ? selectedCategory.Icon : Icon}
            <DWText customStyle={styles.text}>
              {selectedCategory ? selectedCategory.name : placeholder}
            </DWText>
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
        <SafeAreaView>
          <View style={styles.modalView}>
            <View style={styles.modalTop}>
              <DWText>Choose category</DWText>
              <View style={styles.close}>
                <Pressable onPress={() => setModalVisible(false)}>
                  <MaterialCommunityIcons
                    name="close"
                    size={24}
                    color={color.softDark}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.modalBody}>
              <FlatList
                data={pickerItems}
                keyExtractor={(item) => item.name}
                ItemSeparatorComponent={HorizontalSerparator}
                renderItem={({ item: category }) => (
                  <DWPickerItem
                    item={category.name}
                    Icon={category.Icon}
                    onPress={() => {
                      setSelectedCategory(category);
                      setModalVisible(false);
                    }}
                  />
                )}
              />
            </View>
          </View>
        </SafeAreaView>
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
  close: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: color.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  detail: {
    flexDirection: "row",
  },
  modalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 32,
  },
  modalBody: {
    // backgroundColor: color.warm,
    marginTop: 16,
  },
  modalView: {
    // height: "50%",
    paddingHorizontal: 32,
    // backgroundColor: color.lightBlue,
    paddingTop: 16,
    paddingBottom: 16,
  },
  text: {
    marginStart: 16,
  },
});
