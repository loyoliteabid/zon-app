import { StyleSheet, View } from "react-native";
import MyText from "../../components/ui/MyText";

const Activity = () => {
  return (
    <View style={styles.container}>
      <MyText>Activities</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Activity;
