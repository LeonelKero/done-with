import { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import DWImageInputList from "./app/components/input/DWImageInputList";
import color from "./app/config/color";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import RootContainer from "./app/screens/RootContainer";
import DWText from "./app/components/text/DWText";
import DWButton from "./app/components/button/DWButton";
import DWIconButton from "./app/components/button/DWIconButton";

const sample = require("./app/assets/necher.jpeg");

export default function App() {
  const [imgUri, setImgUri] = useState();
  // const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => setImageUris([...imageUris, uri]);
  // const handleRemove = (uri) =>
  //   setImageUris(imageUris.filter((img) => img !== uri));

  const requestCameraPermission = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted)
      alert("This application needs acces to Camera in order to word properly");
  };

  const selectImageHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImgUri(result.assets[0].uri);
    } catch (error) {
      console.log("Error selecting image", error);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <RootContainer>
      {/* <DWImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}

      <DWButton
        btnText="Select image"
        handlePress={selectImageHandler}
        disabled={false}
      />
      <Image source={{ uri: imgUri }} style={{ width: 200, height: 200 }} />
      <DWIconButton
        Icon={<MaterialCommunityIcons name="camera" size={48} color={color.gray}/>}
        onPress={selectImageHandler}
      />
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
