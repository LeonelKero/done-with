import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import color from "../../config/color";
import DWText from "../text/DWText";

const DWListItem = ({
  image,
  title,
  subtitle,
  toucheble = true,
  onPress = () => {},
}) => {
  const ItemElement = (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.imgHolder} />
      <View style={styles.info}>
        <DWText customStyle={styles.title}>{title}</DWText>
        <DWText customStyle={styles.subTitle}>{subtitle}</DWText>
      </View>
    </View>
  );

  if (toucheble)
    return (
      <TouchableHighlight onPress={onPress} underlayColor={color.lightBlue}>
        {ItemElement}
      </TouchableHighlight>
    );

  return <>{ItemElement}</>;
};

export default DWListItem;

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
