import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import color from "./app/config/color";

const UserScreen = ({ navigation }) => (
  <View>
    <Text>User screen</Text>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate("user-details", { id: 7 })}
    />
  </View>
);

const UserDetailScreen = ({ navigation, route }) => (
  <View>
    <Text>User detail screen with parameter {route.params.id}</Text>
    <Pressable onPress={() => navigation.navigate("user")}>
      <Text>Go Home</Text>
    </Pressable>
  </View>
);

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "tomato" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="user"
      component={UserScreen}
      // options={{ title: "User | wbt" }}
    />
    <Stack.Screen
      name="user-details"
      component={UserDetailScreen}
      // options={{
      //   headerTintColor: "white",
      //   headerStyle: {backgroundColor: "tomato"}
      // }}
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
