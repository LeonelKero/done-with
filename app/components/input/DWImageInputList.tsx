import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext } from "formik";
import React from "react";
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
  const { setFieldValue, values } = useFormikContext();

  console.log("VALUES", values)

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setFieldValue("My images", result.assets[0].uri);
      // if (!result.canceled) setFieldValue("images", result.assets[0].uri);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {imageUris.map((uri, index) => (
        <DWImageInput
          key={index}
          imageUri={uri}
          onChangeHandle={() => onRemoveImage(uri)}
        />
      ))}
      <DWIconButton
        Icon={
          <MaterialCommunityIcons name="camera" size={48} color={color.gray} />
        }
        onPress={() => pickImage()}
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
});
