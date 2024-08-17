import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import AccountScreen from "../screens/account/AccountScreen";
import ListingsScreen from "../screens/listings/ListingsScreen";
import PostListingScreen from "../screens/post/PostListingScreen";
import FeedNavigation from "./FeedsNavigation";

const BottomTab = createBottomTabNavigator();

const AppBottomTabBar = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Feeds" component={FeedNavigation} />
      <BottomTab.Screen name="Create Post" component={PostListingScreen} />
      <BottomTab.Screen name="Account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
};

export default AppBottomTabBar;

