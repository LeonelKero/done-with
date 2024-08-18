import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingDetailsScreen from "../screens/details/ListingDetailsScreen";
import ListingsScreen from "../screens/listings/ListingsScreen";

const FeedStack = createNativeStackNavigator();

const FeedNavigator = () => (
  <FeedStack.Navigator screenOptions={{ presentation: "modal" }}>
    <FeedStack.Screen
      name="All Feeds"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <FeedStack.Screen
      name="Feed Details"
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
  </FeedStack.Navigator>
);

export default FeedNavigator;
