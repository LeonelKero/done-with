import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import color from "../../config/color";
import DWText from "../text/DWText";

const DWSwipebableListItem = ({
  image,
  title,
  subtitle,
  onPress = () => {},
  renderRightActions = () => {},
  renderLeftActions = () => {},
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
      >
        <TouchableHighlight onPress={onPress} underlayColor={color.lightBlue}>
          <View style={styles.container}>
            <Image source={image} resizeMode="cover" style={styles.imgHolder} />
            <View style={styles.info}>
              <DWText customStyle={styles.title}>{title}</DWText>
              <DWText customStyle={styles.subTitle}>{subtitle}</DWText>
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
    paddingHorizontal: 16,
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
  },
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
