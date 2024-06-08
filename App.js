import { StyleSheet } from "react-native";
import color from "./app/config/color";
import ProductImageScreen from "./app/screens/product/ProductImageScreen";

export default function App() {
  return <ProductImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
