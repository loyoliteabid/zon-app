import { StyleSheet, View } from "react-native";

import Colors from "../../../constants/Colors";
import MyText from "../ui/MyText";
import MyButton from "../ui/MyButton";

const HttpError = ({
  clearError,
  errMsg,
  additionalMsg,
}: {
  clearError: () => void;
  errMsg: string;
  additionalMsg?: string;
}) => {
  return (
    <View>
      <MyText style={{ color: Colors.danger_500 }}>{errMsg}</MyText>
      <MyText style={{ color: Colors.gray_900 }}>{additionalMsg}</MyText>
      <MyButton onPress={clearError} containerStyle={styles.errOkBtn}>
        <MyText style={{ color: Colors.gray_900 }}>OK</MyText>
      </MyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  errOkBtn: {
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.gray_200,
    borderRadius: 8,
  },
});

export default HttpError;
