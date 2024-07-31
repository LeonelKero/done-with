import React from "react";
import { Image, ImageURISource, StyleSheet, View } from "react-native";

interface Props {
  imageUri?: string;
  customStyle?: object;
  onChangeHandle?: (newUri: string) => void;
}

const DWImageInput = ({ imageUri, customStyle, onChangeHandle }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: imageUri}}
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
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
