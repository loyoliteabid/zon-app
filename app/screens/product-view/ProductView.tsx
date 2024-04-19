import { StyleSheet, View } from "react-native";
import MyText from "../../components/ui/MyText";

const ProductView = () => {
  return (
    <View style={styles.container}>
      <MyText>ProductView</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ProductView;
