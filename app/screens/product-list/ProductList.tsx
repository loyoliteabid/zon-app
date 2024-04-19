import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import MyText from "../../components/ui/MyText";
import {
  RootStackParamList,
  ScreenNavigationProp,
} from "../../definitions/RouteModel";

type MyRouteProps = RouteProp<RootStackParamList, "ProductList">;

const ProductList = () => {
  const { params } = useRoute<MyRouteProps>();

  const categoryId = params?.categoryId ?? "";
  const categoryName = params?.categoryName ?? "";

  const navigation = useNavigation<ScreenNavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      title: `${categoryName} List`,
    });
  }, [navigation, categoryName]);

  return (
    <View style={styles.container}>
      <MyText>ProductList</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ProductList;
