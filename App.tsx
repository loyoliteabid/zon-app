import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthContextProvider from "./app/store/Auth-context";
import LoginOverview from "./app/screens/login/Overview";

export default function App() {
  return (
    <AuthContextProvider>
      <View style={styles.container}>
        <LoginOverview />
        <StatusBar style="auto" />
      </View>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
