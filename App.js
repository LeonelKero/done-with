import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import DWInput from "./app/components/input/DWInput";
import DWSwitch from "./app/components/switch/DWSwitch";
import color from "./app/config/color";
import RootContainer from "./app/screens/RootContainer";
import DWPicker from "./app/components/picker/DWPicker";

export default function App() {
  return (
    <RootContainer>
      {/* <DWInput
        placeholder="First name"
        Icon={
          <MaterialCommunityIcons name="email" size={21} color={color.gray} />
        }
      />
      <DWSwitch
        text="Air plane mode"
        getCurrentState={(state) => console.log("Switch state", state)}
      /> */}
      <DWPicker Icon={<MaterialIcons name="category" size={21} color={color.gray} />} title="Select category" />
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
