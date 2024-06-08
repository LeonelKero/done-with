import React from "react";
import { Image, StyleSheet, View } from "react-native";
import DWListItem from "../../components/list/DWListItem";
import DWText from "../../components/text/DWText";
import color from "../../config/color";
import RootContainer from "../RootContainer";

const ListingDetails = () => {
  return (
    <RootContainer>
      <View style={styles.top}>
        <Image
          style={styles.image}
          source={require("../../assets/nature.jpeg")}
          resizeMode="contain"
        />
        <View style={styles.desc}>
          <DWText customStyle={styles.title}>
            Nature image around the globe
          </DWText>
          <DWText customStyle={styles.price}>$ 80</DWText>
        </View>
      </View>
      <View style={styles.publisher}>
        <DWListItem
          image={require("../../assets/nature.jpeg")}
          title={"Leonel ka"}
          subtitle={"15 items"}
        />
      </View>
    </RootContainer>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  top: {
    backgroundColor: color.white,
  },
  image: {
    width: "100%",
    height: 300,
  },
  desc: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: color.softDark,
  },
  price: {
    fontWeight: "600",
    color: color.secondary,
    paddingVertical: 4
  },
  publisher: {
    marginTop: 16,
  },
});
