import { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";
import color from "../../config/color";
import DWText from "../text/DWText";

interface Props {
  item: string;
  Icon: ReactNode;
  onPress: () => void;
}

const DWPickerItem = ({ item, Icon, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {Icon}
      <DWText customStyle={styles.text}>{item}</DWText>
    </Pressable>
  );
};

export default DWPickerItem;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: color.lightBlue,
    paddingVertical: 16,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text:{
    paddingHorizontal: 16
  }
});
