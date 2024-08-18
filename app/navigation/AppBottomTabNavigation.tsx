import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import PostListingScreen from "../screens/post/PostListingScreen";
import AccountNavigation from "./AccountNavigation";
import FeedNavigation from "./FeedsNavigation";

const BottomTab = createBottomTabNavigator();

const AppBottomTabBar = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Feeds" component={FeedNavigation} />
      <BottomTab.Screen name="Create Post" component={PostListingScreen} />
      <BottomTab.Screen
        name="Account"
        component={AccountNavigation}
        options={{headerShown: false}}
      />
    </BottomTab.Navigator>
  );
};

export default AppBottomTabBar;
