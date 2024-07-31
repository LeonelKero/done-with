import { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import DWImageInputList from "./app/components/input/DWImageInputList";
import color from "./app/config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RootContainer from "./app/screens/RootContainer";
import DWText from "./app/components/text/DWText";
import DWButton from "./app/components/button/DWButton";
import DWIconButton from "./app/components/button/DWIconButton";
import DWImageInput from "./app/components/image/DWImageInput";
import ListingsScreen from "./app/screens/listings/ListingsScreen";
import PostListingScreen from "./app/screens/post/PostListingScreen";

const sample = require("./app/assets/necher.jpeg");

export default function App() {
  const [imgUri, setImgUri] = useState(null);
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
    <>
      {/* <RootContainer>
        <DWIconButton
          Icon={
            <MaterialCommunityIcons
              name="camera"
              size={48}
              color={color.gray}
            />
          }
          onPress={selectImageHandler}
        />
        {imgUri && <DWImageInput imageUri={imgUri} />}
      </RootContainer> */}
      <PostListingScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
