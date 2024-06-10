import { StyleSheet } from "react-native";
import color from "./app/config/color";
import ProductImageScreen from "./app/screens/product/ProductImageScreen";
import WelcomeScreen from "./app/screens/welcome/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/details/ListingDetailsScreen";
import MessagesScreen from "./app/screens/messages/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
