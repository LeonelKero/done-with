import React from "react";
import { ImageURISource, StyleSheet, View } from "react-native";
import DWImageInput from "../image/DWImageInput";

interface Props {
  imageUris: ImageURISource[];
  onAddImage: (imageUri: ImageURISource) => void;
  onRemoveImage: (imageUri: ImageURISource) => void;
}

const DWImageInputList = ({ imageUris, onAddImage, onRemoveImage }: Props) => {
  return (
    <View style={styles.container}>
      {imageUris.map((uri, index) => (
        <DWImageInput
          key={index}
          imageUri={uri}
          onChangeHandle={() => onRemoveImage(uri)}
        />
      ))}
      // Another input image for adding
    </View>
  );
};

export default DWImageInputList;

const styles = StyleSheet.create({
  container: {},
});
