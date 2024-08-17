import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingDetailsScreen from "../screens/details/ListingDetailsScreen";
import ListingsScreen from "../screens/listings/ListingsScreen";

const FeedStack = createNativeStackNavigator();

const FeedNavigation = () => (
  <FeedStack.Navigator>
    <FeedStack.Screen name="Feeds" component={ListingsScreen} options={{headerShown: false}} />
    <FeedStack.Screen name="Feed Details" component={ListingDetailsScreen} />
  </FeedStack.Navigator>
);

export default FeedNavigation;
