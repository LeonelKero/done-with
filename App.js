import { StyleSheet } from "react-native";
import DWImageInput from "./app/components/image/DWImageInput";
import color from "./app/config/color";
import RootContainer from "./app/screens/RootContainer";

const sample = require("./app/assets/necher.jpeg");

export default function App() {
  return (
    <RootContainer>
      <DWImageInput imageUri={sample} />
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
