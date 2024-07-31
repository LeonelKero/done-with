import React from "react";
import { StyleSheet, View } from "react-native";
import DWImageInput from "../image/DWImageInput";

interface Props {
  imageUris?: string[];
  onAddImage?: (imageUri: string) => void;
  onRemoveImage?: (imageUri: string) => void;
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
      <DWImageInput onChangeHandle={(uri) => onAddImage(uri)} />
    </View>
  );
};

export default DWImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
