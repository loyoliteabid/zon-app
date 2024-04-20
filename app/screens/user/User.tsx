import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import MyText from "../../components/ui/MyText";
import { AuthContext } from "../../store/Auth-context";

const User = () => {
  const authCtx = useContext(AuthContext);
  const { user, logout } = authCtx;

  const handleLogout = () => {
    logout(); // Call the logout function from the AuthContext
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MyText style={styles.logoutButtonText}>Logout</MyText>
      </TouchableOpacity>
      <MyText style={styles.title}>Profile</MyText>
      {!!user && (
        <View style={styles.userInfoContainer}>
          <MyText style={styles.label}>Username:</MyText>
          <MyText style={styles.text}>{user?.userName}</MyText>
          <MyText style={styles.label}>Email:</MyText>
          <MyText style={styles.text}>{user?.email}</MyText>
        </View>
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  userInfoContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 20,
    width: "80%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
  logoutButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
});

export default User;
