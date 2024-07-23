import React from "react";
import { Image, ImageURISource, StyleSheet, View } from "react-native";

interface Props {
  imageUri: ImageURISource;
  customStyle?: object;
  onChangeHandle?: (newUri: string) => void;
}

const DWImageInput = ({ imageUri, customStyle, onChangeHandle }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={imageUri}
        resizeMode="cover"
        style={[styles.image, customStyle]}
      />
    </View>
  );
};

export default DWImageInput;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    padding: 4,
    // borderWidth: 1,
    // borderColor: 'dodgerblue',
    // width: 'auto'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
});
