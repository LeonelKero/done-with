import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  imageUris: string[];
  onAddImage: () => void;
  onRemoveImage: (uri: string) => void;
}

const DWImageInputList = ({ imageUris, onAddImage, onRemoveImage }: Props) => {
  return (
    <View style={styles.container}>
      {imageUris.map((uri, index) => (
        <></>
      ))}
    </View>
  );
};

export default DWImageInputList;

const styles = StyleSheet.create({
  container: {},
});
