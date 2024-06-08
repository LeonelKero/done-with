import { StyleSheet } from "react-native";
import color from "./app/config/color";
import ListingDetails from "./app/screens/details/ListingDetails";

export default function App() {
  return <ListingDetails />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
