import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import color from "./app/config/color";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppBottomTabBar from "./app/navigation/AppBottomTabNavigator";

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
    <Text>User detail screen with parameter {route.params?.id}</Text>
    <Pressable onPress={() => navigation.navigate("user")}>
      <Text>Go Home</Text>
    </Pressable>
  </View>
);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "dodgerblue",
      }}
    >
      <Tab.Screen
        name="Home"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={UserDetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <AppBottomTabBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
});
