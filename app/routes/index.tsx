import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";

import { AuthContext } from "../store/Auth-context";
import AuthenticatedStack from "./AuthenticatedStack";
import AuthStack from "./AuthStack";

const Routes = () => {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authCtx.isAuthenticated || authCtx.skipAuth ? (
        <AuthenticatedStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
