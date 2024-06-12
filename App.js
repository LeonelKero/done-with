import { StyleSheet } from "react-native";
import color from "./app/config/color";
import ProductImageScreen from "./app/screens/product/ProductImageScreen";
import WelcomeScreen from "./app/screens/welcome/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/details/ListingDetailsScreen";
import MessagesScreen from "./app/screens/messages/MessagesScreen";
import AccountScreen from "./app/screens/account/AccountScreen";
import ListingsScreen from "./app/screens/listings/ListingsScreen";
import RootContainer from "./app/screens/RootContainer";
import DWInput from "./app/components/input/DWInput";
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function App() {
  return <RootContainer>
    <DWInput placeholder="First name" Icon={<MaterialCommunityIcons name="email" size={21} color={color.gray} />} />
  </RootContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
