import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/signin/SignInScreen";
import SignUpScreen from "../screens/signup/SignUpScreen";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
