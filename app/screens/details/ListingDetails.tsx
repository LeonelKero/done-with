import React from "react";
import { Image, StyleSheet, View } from "react-native";
import DWText from "../../components/text/DWText";
import RootContainer from "../RootContainer";
import color from "../../config/color";

const ListingDetails = () => {
  return (
    <RootContainer>
      <Image
        style={styles.image}
        source={require("../../assets/nature.jpeg")}
        resizeMode="contain"
      />
      <View style={styles.desc}>
        <DWText customStyle={styles.title}>Nature image around the globe</DWText>
        <DWText customStyle={styles.price}>$ 80</DWText>
      </View>
    </RootContainer>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  desc: {
   paddingHorizontal: 24
  },
  title:{
    fontSize: 20,
    fontWeight: '600',
    color: color.softDark
  },
  price:{
    fontWeight: '500',
    color: color.secondary
  }
});
