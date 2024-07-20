import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  imageUri: string;
  customStyle?: object;
  onChangeHandle?: (newUri: string) => void;
}

const DWImageInput = ({ imageUri, customStyle, onChangeHandle }: Props) => {
  return (
    <View>
      <Image
        source={require(imageUri)}
        resizeMode="cover"
        style={[styles.image, customStyle]}
      />
    </View>
  );
};

export default DWImageInput;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
});
