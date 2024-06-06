import { Image, Pressable, SafeAreaView, StyleSheet } from "react-native";
import RootPage from "./pages/RootContainer";
import WelcomePage from "./pages/welcome/WelcomePage";
import ViewProductPage from "./pages/product/ViewProductPage";

export default function App() {
  return (
    <ViewProductPage />
  );
}

const styles = StyleSheet.create({
  container: {},
});
