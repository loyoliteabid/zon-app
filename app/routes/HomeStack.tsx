import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home/Home";
import ProductList from "../screens/product-list/ProductList";
import ProductView from "../screens/product-view/ProductView";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeOverview" component={HomeScreen} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductView" component={ProductView} />
    </Stack.Navigator>
  );
};

export default HomeStack;
