import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useHttpClient } from "../../hooks/httpHooks";
import { Category } from "../../definitions/DataTypes";
import Colors from "../../../constants/Colors";
import { ScreenNavigationProp } from "../../definitions/RouteModel";
import CategoryList from "../../components/home/CategoryList";
import ShowRoomList from "../../components/home/ShowRoomList";

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  // custom hook
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const navigation = useNavigation<ScreenNavigationProp>();

  useEffect(() => {
    const onLoad = async () => {
      try {
        const { data } = (await sendRequest("/categories")) as {
          data: Category[];
        };

        setCategories(data ?? []);
      } catch (error) {
        //
      }
    };
    onLoad();
  }, [sendRequest]);

  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={{ backgroundColor: Colors.white }}>
      <CategoryList
        categories={categories}
        isLoading={isLoading}
        error={error}
        onPressCategoryItem={(item) => {
          navigation.navigate("ProductList", {
            categoryId: item.id,
            categoryName: item.name,
            type: item.imageSrc ?? "motors", // nee one known unique value, for now use imageSrc
          });
        }}
        clearError={clearError}
      />

      <Pressable style={styles.bannerContainer}>
        <Image
          source={require("../../../assets/slide.png")}
          style={[styles.image, { width: screenWidth - 20 }]}
        />
      </Pressable>

      <ShowRoomList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 8,
    borderColor: Colors.gray_100,
    borderWidth: 1,
    marginVertical: 6,
    marginHorizontal: 5,
    resizeMode: "stretch",
  },
});

export default HomeScreen;
