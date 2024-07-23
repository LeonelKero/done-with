import { Image, StyleSheet } from "react-native";
import DWText from "./app/components/text/DWText";
import color from "./app/config/color";
import RootContainer from "./app/screens/RootContainer";
import DWImageInput from "./app/components/image/DWImageInput";

const sample = require("./app/assets/necher.jpeg")

export default function App() {
  return (
    <RootContainer>
      <Image source={sample} width={80} height={80} />
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
