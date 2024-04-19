import { StyleSheet, View } from "react-native";
import MyText from "../../components/ui/MyText";

const Chat = () => {
  return (
    <View style={styles.container}>
      <MyText>Chats</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Chat;
