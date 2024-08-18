import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingDetailsScreen from "../screens/details/ListingDetailsScreen";
import ListingsScreen from "../screens/listings/ListingsScreen";
import AppRoutes from "./AppRoutes";

const FeedStack = createNativeStackNavigator();

const FeedNavigator = () => (
  <FeedStack.Navigator screenOptions={{ presentation: "modal" }}>
    <FeedStack.Screen
      name={AppRoutes.ALL_FEEDS}
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <FeedStack.Screen
      name={AppRoutes.FEED_DETAILS}
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
  </FeedStack.Navigator>
);

export default FeedNavigator;
