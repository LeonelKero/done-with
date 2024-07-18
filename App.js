import { StyleSheet } from "react-native";
import color from "./app/config/color";
import PostListingScreen from "./app/screens/post/PostListingScreen";

export default function App() {
  return <PostListingScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
