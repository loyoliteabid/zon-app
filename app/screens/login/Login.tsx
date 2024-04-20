import React, { useContext, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { useHttpClient } from "../../hooks/httpHooks";
import HttpError from "../../components/shared/HttpError";
import Colors from "../../../constants/Colors";
import MyButton from "../../components/ui/MyButton";
import MyText from "../../components/ui/MyText";
import { LinearGradient } from "expo-linear-gradient";
import { AuthResponse } from "../../definitions/DataTypes";
import { AuthContext } from "../../store/Auth-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);
  const { authenticate, setUser } = authCtx;

  // custom hook
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const handleLogin = async () => {
    // TODO: validate inputs
    try {
      if (email && password) {
        const body = JSON.stringify({
          email,
          password,
        });

        const { data } = (await sendRequest("/users/login", "POST", body, {
          "Content-Type": "application/json",
        })) as { data: AuthResponse };

        if (data) {
          authenticate(data.token);
          setUser(data);
        }
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <LinearGradient
        colors={["#F06100", "#F04900", "#F03000", "#F00030", "#F0006D"]}
        style={styles.loginBtnContainer}
      >
        <MyButton
          onPress={() => {
            if (!isLoading) {
              handleLogin();
            }
          }}
        >
          <MyText style={styles.primaryBtnText}>
            {isLoading ? "Loading..." : "Login"}
          </MyText>
        </MyButton>
      </LinearGradient>
      {!!error && (
        <HttpError
          clearError={clearError}
          errMsg={error?.message ?? "Something went wrong"}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.danger_10,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.gray_300,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  loginBtnContainer: {
    height: 40,
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    opacity: 0.85,
    gap: 8,
  },
  primaryBtnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
  },
});

export default Login;
