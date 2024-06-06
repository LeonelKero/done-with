import { Image, Pressable, SafeAreaView, StyleSheet } from "react-native";
import RootPage from "./pages/RootContainer";
import WelcomePage from "./pages/welcome/WelcomePage";

export default function App() {
  return (
    <WelcomePage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
});
