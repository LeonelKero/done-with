import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import color from "./app/config/color";

const UserScreen = () => (
  <View>
    <Text>User screen</Text>
  </View>
);

const UserDetailScreen = () => (
  <View>
    <Text>User detail screen</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="user"
      component={UserScreen}
      options={{ title: "User | wbt" }}
    />
    <Stack.Screen
      name="user-details"
      component={UserDetailScreen}
      options={{ title: "Details | wbt" }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
