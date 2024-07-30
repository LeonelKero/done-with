import { useState } from "react";
import { StyleSheet } from "react-native";
import DWImageInputList from "./app/components/input/DWImageInputList";
import color from "./app/config/color";
import RootContainer from "./app/screens/RootContainer";

const sample = require("./app/assets/necher.jpeg");

export default function App() {
  const [imageUris, setImageUris] = useState<ImageURISource>([]);

  const handleAdd = (uri) => {};

  return (
    <RootContainer>
      <DWImageInputList imageUris={imageUris} onAddImage={handleAdd} />
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
