import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/Home";

const BottomTabs = createBottomTabNavigator();

const AuthenticatedStack = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
    </BottomTabs.Navigator>
  );
};

export default AuthenticatedStack;
