import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import MyText from "../../components/ui/MyText";
import {
  RootStackParamList,
  ScreenNavigationProp,
} from "../../definitions/RouteModel";
import { Product } from "../../definitions/DataTypes";
import { useHttpClient } from "../../hooks/httpHooks";
import Colors from "../../../constants/Colors";
import HttpError from "../../components/shared/HttpError";
import MotorList from "../../components/product-list/MotorList";

type MyRouteProps = RouteProp<RootStackParamList, "ProductList">;

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { params } = useRoute<MyRouteProps>();

  const categoryId = params?.categoryId ?? "";
  const categoryName = params?.categoryName ?? "";
  const type = params?.type ?? "";

  const navigation = useNavigation<ScreenNavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      title: `${categoryName} List`,
    });
  }, [navigation, categoryName]);

  // custom hook
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const onLoad = async () => {
      const { data } = (await sendRequest(
        `/products?categoryId=${categoryId}`
      )) as {
        data: Product[];
      };

      setProducts(data ?? []);
    };
    onLoad();
  }, [sendRequest, categoryId]);

  return (
    <View style={styles.container}>
      {isLoading && (
        <View>
          <MyText style={{ color: Colors.gray_100 }}>Loading products</MyText>
        </View>
      )}

      {!!error && (
        <HttpError
          errMsg="Failed to load products"
          additionalMsg="Please check your connection"
          clearError={clearError}
        />
      )}

      {type === "motors" && (
        <MotorList
          products={products}
          onPressProductListItem={(product) => {
            navigation.navigate("ProductView", {
              productId: product.id,
              productName: product.name,
              type,
            });
          }}
        />
      )}

      {type !== "motors" && <MyText>{`${categoryName} List`}</MyText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductList;
