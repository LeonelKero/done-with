import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import SignInScreen from "../screens/signin/SignInScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Sign In" component={SignInScreen} />
      {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
