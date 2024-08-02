import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

interface Props {
  imageUri?: string;
  customStyle?: object;
  onChangeHandle?: () => void;
}

const DWImageInput = ({ imageUri, customStyle, onChangeHandle }: Props) => {
  return (
    <Pressable onPress={onChangeHandle}>
      <View style={styles.container}>
        <Image
          source={{ uri: imageUri }}
          resizeMode="cover"
          style={[styles.image, customStyle]}
        />
      </View>
    </Pressable>
  );
};

export default DWImageInput;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    padding: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});
