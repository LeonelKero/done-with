import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import color from "../../config/color";
import DWText from "../text/DWText";

interface Props {
  image: number;
  title: string;
  subtitle: string;
  onPress: () => void;
  // renderLeftActions: ReactNode;
  renderRightActions: ReactNode;
  subtitleNumberOfLines: number;
}

const DWSwipebableListItem = ({
  image,
  title,
  subtitle,
  onPress = () => {},
  renderRightActions = <></>,
  subtitleNumberOfLines: numberOfLines
}: // renderLeftActions = <></>,
Props) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        // renderLeftActions={() => renderLeftActions}
        renderRightActions={() => renderRightActions}
      >
        <TouchableHighlight onPress={onPress} underlayColor={color.lightBlue}>
          <View style={styles.container}>
            <Image source={image} resizeMode="cover" style={styles.imgHolder} />
            <View style={styles.info}>
              <View style={styles.details}>
                <DWText customStyle={styles.title}>{title}</DWText>
                <DWText customStyle={styles.subTitle} numberOfLines={numberOfLines}>{subtitle}</DWText>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color={color.softGray}
              />
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default DWSwipebableListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // borderColor: "lightgray",
    // borderWidth: 2,
    paddingHorizontal: 32,
    width: "100%",
    paddingVertical: 16,
    backgroundColor: color.white,
  },
  imgHolder: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    marginStart: 16,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {},
  title: {
    fontWeight: "600",
    fontSize: 20,
    color: color.softDark,
  },
  subTitle: {
    fontSize: 16,
    color: color.gray,
  },
});
