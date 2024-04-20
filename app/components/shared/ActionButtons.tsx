import { Dimensions, StyleSheet, View } from "react-native";
import MyButton from "../ui/MyButton";
import MyText from "../ui/MyText";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../constants/Colors";

const screenWidth = Dimensions.get("window").width;

const ActionButtons = ({ height }: { height?: number }) => {
  return (
    <View style={styles.buttonContainer}>
      <MyButton
        onPress={() => {}}
        containerStyle={[styles.chatBtnContainer, height ? { height } : {}]}
      >
        <MyText style={styles.chatBtnText}>Chat</MyText>
      </MyButton>
      <LinearGradient
        colors={["#F06100", "#F04900", "#F03000", "#F00030", "#F0006D"]}
        style={[styles.callBtnContainer, height ? { height } : {}]}
      >
        <MyButton onPress={() => {}}>
          <MyText style={styles.callBtnText}>Call</MyText>
        </MyButton>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  chatBtnContainer: {
    backgroundColor: Colors.danger_10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.danger_500,
    height: 32,
    width: screenWidth * 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  chatBtnText: {
    color: Colors.danger_500,
    fontWeight: "600",
    fontSize: 14,
  },
  callBtnContainer: {
    height: 32,
    width: screenWidth * 0.4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  callBtnText: {
    color: Colors.white,
    fontWeight: "600",
    fontSize: 14,
  },
});

export default ActionButtons;
