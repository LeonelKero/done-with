import { Image, Pressable, SafeAreaView, StyleSheet } from "react-native";
import RootPage from "./pages/RootPage";

export default function App() {
  return (
    <RootPage>
      <Pressable
        onPress={() => {
          console.log("Pressed");
        }}ß
      >
        <Image
          resizeMode="contain"
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
          style={{ width: 300, height: 200, borderWidth: 1 }}
        />
      </Pressable>
    </RootPage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
});
