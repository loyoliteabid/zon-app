import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AuthContextProvider from "./app/store/Auth-context";
import Routes from "./app/routes/Routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthContextProvider>
        <StatusBar style="auto" />
        <Routes />
      </AuthContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
