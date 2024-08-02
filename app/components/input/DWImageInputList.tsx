import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import color from "../../config/color";
import DWIconButton from "../button/DWIconButton";
import DWImageInput from "../image/DWImageInput";

interface Props {
  imageUris: string[];
  onAddImage?: (imgUri: Promise<string>) => void;
  onRemoveImage?: (imageUri: string) => void;
}

const DWImageInputList = ({ imageUris, onRemoveImage }: Props) => {
  const [itemImages, setProductImages] = useState<string[]>(imageUris);

  const chooseImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        const img = result.assets[0].uri;
        setProductImages((old) => [...old, img]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeImage = (imgUri: string) => {
    // Todo: Show alert and filter image table
    console.log("Remove Image", imgUri);
  };

  return (
    <View style={styles.container}>
      {itemImages.map((uri, index) => (
        <DWImageInput
          key={index}
          imageUri={uri}
          onChangeHandle={() => removeImage(uri)}
        />
      ))}
      <DWIconButton
        Icon={
          <MaterialCommunityIcons name="camera" size={40} color={color.gray} />
        }
        customStyle={styles.imgSelector}
        onPress={chooseImage}
      />
    </View>
  );
};

export default DWImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "dodgerblue",
    marginBottom: 8,
  },
  imgSelector: {
    width: 80,
    height: 80,
  },
});
