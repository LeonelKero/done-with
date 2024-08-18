import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import PostListingScreen from "../screens/post/PostListingScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedsNavigator";

const BottomTab = createBottomTabNavigator();

const AppBottomTabBar = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Feeds" component={FeedNavigator} />
      <BottomTab.Screen name="Create Post" component={PostListingScreen} />
      <BottomTab.Screen
        name="Account"
        component={AccountNavigator}
        options={{headerShown: false}}
      />
    </BottomTab.Navigator>
  );
};

export default AppBottomTabBar;
