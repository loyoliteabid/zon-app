import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginOverview from "../screens/login/Overview";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="overview" component={LoginOverview} />
    </Stack.Navigator>
  );
};

export default AuthStack;
