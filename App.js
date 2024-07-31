import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import DWImageInputList from "./app/components/input/DWImageInputList";
import color from "./app/config/color";
import RootContainer from "./app/screens/RootContainer";
import DWText from "./app/components/text/DWText";

const sample = require("./app/assets/necher.jpeg");

export default function App() {
  // const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => setImageUris([...imageUris, uri]);
  // const handleRemove = (uri) =>
  //   setImageUris(imageUris.filter((img) => img !== uri));

  const requestCameraPermission = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted)
      alert("This application needs acces to Camera in order to word properly");
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

      <DWText>Some text</DWText>
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
