import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/signin/SignInScreen";
import SignUpScreen from "../screens/signup/SignUpScreen";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import AppRoutes from "./AppRoutes";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.WELCOME}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={AppRoutes.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={AppRoutes.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
