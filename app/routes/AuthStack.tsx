import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginOverview from "../screens/login/Overview";
import Register from "../screens/login/Register";
import Login from "../screens/login/Login";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Overview"
        component={LoginOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
