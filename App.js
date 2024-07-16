import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DWPicker from "./app/components/picker/DWPicker";
import color from "./app/config/color";
import RootContainer from "./app/screens/RootContainer";
import SignInScreen from "./app/screens/signin/SignInScreen";
import WelcomeScreen from "./app/screens/welcome/WelcomeScreen";
import PostListingScreen from "./app/screens/post/PostListingScreen";
import DWSwitch from "./app/components/switch/DWSwitch";

export default function App() {
  return <PostListingScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
