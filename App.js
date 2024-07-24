import { useState } from "react";
import { StyleSheet } from "react-native";
import color from "./app/config/color";
import RootContainer from "./app/screens/RootContainer";
import DWImageInputList from "./app/components/input/DWImageInputList";

const sample = require("./app/assets/necher.jpeg");

export default function App() {
  const [imageUris, setImageUris] = useState<import("react-native").ImageURISource>([]);

const handleAdd = (uri) => {}

  return (
    <RootContainer>
      <DWImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
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
