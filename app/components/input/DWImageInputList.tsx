import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext } from "formik";
import React, { useRef, useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import color from "../../config/color";
import DWIconButton from "../button/DWIconButton";
import DWImageInput from "../image/DWImageInput";

interface Props {
  imageUris: string[];
  onAddImage?: (imgUri: Promise<string>) => void;
}

const DWImageInputList = ({ imageUris }: Props) => {
  const [itemImages, setProductImages] = useState<string[]>(imageUris);
  const { setFieldValue } = useFormikContext();

  const chooseImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) {
        const img = result.assets[0].uri;
        setProductImages((old) => {
          const uris = [...old, img];
          setFieldValue("images", uris);
          return uris;
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeImage = (imgUri: string) => {
    Alert.alert(
      "Remove product image",
      "Do you really want to remove this product image?",
      [
        {
          text: "OK",
          onPress: () =>
            setProductImages((oldUris) => {
              const mostRecentUris = oldUris.filter((uri) => uri !== imgUri);
              setFieldValue("images", mostRecentUris);
              return mostRecentUris;
            }),
        },
        {
          text: "Cancel",
          onPress: () => {},
        },
      ]
    );
  };

  const scrollRef = useRef(null);

  return (
    <>
      <ScrollView
        horizontal
        ref={scrollRef}
        onContentSizeChange={() => scrollRef.current.scrollToEnd()}
      >
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
              <MaterialCommunityIcons
                name="camera"
                size={40}
                color={color.gray}
              />
            }
            customStyle={styles.imgSelector}
            onPress={chooseImage}
          />
        </View>
      </ScrollView>
      {/* <DWErrorText message={errors["images"]} isVisible={touched["images"]} /> */}
    </>
  );
};

export default DWImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 8,
  },
  imgSelector: {
    width: 80,
    height: 80,
  },
});
