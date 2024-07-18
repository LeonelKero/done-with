import { StyleSheet } from "react-native";
import color from "./app/config/color";
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
