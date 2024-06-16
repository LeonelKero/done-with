import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DWPicker from "./app/components/picker/DWPicker";
import color from "./app/config/color";
import RootContainer from "./app/screens/RootContainer";
import SignInScreen from "./app/screens/signin/SignInScreen";
import WelcomeScreen from "./app/screens/welcome/WelcomeScreen";

const pickerItems = [
  {
    name: "Technology",
    value: 1,
    Icon: (
      <MaterialCommunityIcons
        name={"laptop"}
        size={24}
        color={color.gray}
      />
    ),
  },
  {
    name: "Furnitures",
    value: 2,
    Icon: (
      <MaterialCommunityIcons
        name={"table-furniture"}
        size={24}
        color={color.gray}
      />
    ),
  },
  {
    name: "Clothing",
    value: 3,
    Icon: (
      <MaterialCommunityIcons
        name={"glasses"}
        size={24}
        color={color.gray}
      />
    ),
  },
];

export default function App() {
  return ( <SignInScreen />
    // <RootContainer>
    //    <DWInput
    //     placeholder="First name"
    //     Icon={
    //       <MaterialCommunityIcons name="email" size={21} color={color.gray} />
    //     }
    //   />
    //   <DWSwitch
    //     text="Air plane mode"
    //     getCurrentState={(state) => console.log("Switch state", state)}
    //   /> 
    //   {/* <DWPicker
    //     Icon={
    //       <MaterialIcons name="category" size={16} color={color.softDark} />
    //     }
    //     placeholder="Item category"
    //     pickerItems={pickerItems}
    //   /> */}
    //  </RootContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
