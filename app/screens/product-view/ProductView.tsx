import { StyleSheet, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import MyText from "../../components/ui/MyText";
import {
  RootStackParamList,
  ScreenNavigationProp,
} from "../../definitions/RouteModel";
import { useEffect } from "react";
import { Product } from "../../definitions/DataTypes";
import MotorView from "../../components/product-view/MotorView";

type MyRouteProps = RouteProp<RootStackParamList, "ProductView">;

const ProductView = () => {
  const { params } = useRoute<MyRouteProps>();

  const product = params?.product ?? ({} as Product);
  const type = params?.type ?? "";

  const navigation = useNavigation<ScreenNavigationProp>();

  const title = product?.name ?? "Product View";

  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      {type === "motors" && <MotorView product={product} />}
      {type !== "motors" && <MyText>{`${title} View`}</MyText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ProductView;
