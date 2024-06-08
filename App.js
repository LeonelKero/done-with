import { StyleSheet } from "react-native";
import color from "./app/config/color";
import ProductImageScreen from "./app/screens/product/ProductImageScreen";
import WelcomeScreen from "./app/screens/welcome/WelcomeScreen";
import ListingDetails from "./app/screens/details/ListingDetails";
import MessagesScreen from "./app/screens/messages/MessagesScreen";

export default function App() {
  return <ListingDetails />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
