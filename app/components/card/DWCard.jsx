import React from "react";
import { Image, StyleSheet, View, Platform } from "react-native";
import color from "../../config/color";
import DWText from "../text/DWText";

const DWCard = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.textContainer}>
        <DWText customStyle={styles.title}>{title}</DWText>
        <DWText customStyle={styles.subTitle}>{subTitle}</DWText>
      </View>
    </View>
  );
};

export default DWCard;

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    width: "100%",
    height: 300,
    overflow: "hidden",
    backgroundColor: color.white,
    paddingBottom: 4,
    marginBottom: 16,
    // ...Platform.select({
    //     ios:{
    //         shadowColor: color.deepRed,
    //         shadowOffset: {width: 2, height: 30},
    //         shadowOffset: {width: 2, height: 30},
    //         shadowOpacity: 10
    //     },
    //     android:{}
    // })
  },
  image: {
    width: "100%",
    height: "80%",
  },
  textContainer: {
    padding: 4,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: color.softDark,
  },
  subTitle: {
    color: color.secondary,
    fontWeight: "500",
  },
});
