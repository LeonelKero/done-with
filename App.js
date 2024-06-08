import { StyleSheet, View } from "react-native";
import DWCard from "./app/components/card/DWCard";
import color from "./app/config/color";
import RootContainer from "./app/screens/RootContainer";

export default function App() {
  return (
    <RootContainer>
      <View style={styles.container}>
        <DWCard
          image={require("./app/assets/nature.jpeg")}
          title={"Really awesome item to sale"}
          subTitle={"$ 80"}
        />
      </View>
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
