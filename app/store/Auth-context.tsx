import { ReactNode, createContext, useState } from "react";

type ContextValue = {
  token: string | null;
  isAuthenticated: boolean;
  skipAuth: boolean;
  authenticate: (token: string) => void;
  skipAuthentication: () => void;
  logout: () => void;
};

export const AuthContext = createContext<ContextValue>({
  token: null,
  isAuthenticated: false,
  skipAuth: false,
  authenticate: (token: string) => {},
  skipAuthentication: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [skipAuth, setSkipAuth] = useState(false);

  function authenticate(token: string) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken(null);
  }

  function skipAuthentication() {
    setSkipAuth(true);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    skipAuth,
    authenticate,
    skipAuthentication,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
