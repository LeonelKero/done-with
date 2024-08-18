import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import PostListingScreen from "../screens/post/PostListingScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedsNavigator";
import DWCreateFreedButton from "./components/DWCreateFreedButton";
import AppRoutes from "./AppRoutes";

const BottomTab = createBottomTabNavigator();

const AppBottomTabBar = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={AppRoutes.FEEDS}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={AppRoutes.CREATE_POST}
        component={PostListingScreen}
        options={({ navigation }) => ({
          tabBarButton: () => <DWCreateFreedButton onPress={() => navigation.navigate("Create Post")} />
        })}
      />
      <BottomTab.Screen
        name={AppRoutes.ACCOUNT}
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppBottomTabBar;
