import { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";
import DWText from "../text/DWText";
import color from "../../config/color";

interface Props {
  item: Category;
  onPress: () => void;
}

interface Category {
  name: string;
  Icon: ReactNode;
  iconBgColor?: string;
}

const DWPickerItem = ({ item, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {item.Icon}
      <DWText customStyle={styles.text}>{item.name}</DWText>
    </Pressable>
  );
};

export default DWPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    width: '32%',
    // borderRadius: 15,
    alignItems: "center",
    // backgroundColor: color.white,
    margin: 2,
    // borderWidth: .2,
    // borderColor: color.softGray
  },
  text: {
    paddingHorizontal: 8,
    marginTop: 8,
    fontSize: 16,
  },
});
