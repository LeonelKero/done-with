import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountScreen from "../screens/account/AccountScreen";
import MessagesScreen from "../screens/messages/MessagesScreen";
import AppRoutes from "./AppRoutes";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRoutes.MY_ACCOUNT} component={AccountScreen} />
      <Stack.Screen name={AppRoutes.MY_MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
