import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";

import { useHttpClient } from "../../hooks/httpHooks";
import MyText from "../../components/ui/MyText";
import { Category } from "../../definitions/DataTypes";
import Colors from "../../../constants/Colors";
import { staticShowRooms } from "../../data/seed";
import MyButton from "../../components/ui/MyButton";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../definitions/RouteModel";

const localImagePaths: { [key: string]: any } = {
  motors: require("../../../assets/motors.png"),
  motorbikes: require("../../../assets/motorbikes.png"),
  showrooms: require("../../../assets/showrooms.png"),
  parts_accessories: require("../../../assets/parts_accessories.png"),
  number_plates: require("../../../assets/number_plates.png"),
  car_service: require("../../../assets/car_service.png"),
  car_wash: require("../../../assets/car_wash.png"),
  car_recovery: require("../../../assets/car_recovery.png"),
  boats: require("../../../assets/boats.png"),
};

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  // custom hook
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const navigation = useNavigation<ScreenNavigationProp>();

  useEffect(() => {
    const onLoad = async () => {
      const { data } = (await sendRequest("/categories")) as {
        data: Category[];
      };

      setCategories(data ?? []);
    };
    onLoad();
  }, [sendRequest]);

  return (
    <View style={styles.container}>
      {/*Header*/}
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Pressable
            style={styles.categoryItem}
            onPress={() => {
              navigation.navigate("ProductList", {
                categoryId: item.id,
                categoryName: item.name,
              });
            }}
          >
            <View style={{ width: 80 }}>
              <Image source={localImagePaths[item.imageSrc ?? "motors"]} />
              <MyText style={styles.categoryText}>{item.name}</MyText>
            </View>
          </Pressable>
        )}
        numColumns={3}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ margin: 5 }}
      />

      {isLoading && (
        <View style={styles.container}>
          <MyText style={{ color: Colors.gray_100 }}>Loading categories</MyText>
        </View>
      )}

      {!!error && (
        <View style={styles.container}>
          <MyText style={{ color: Colors.danger_500 }}>
            Failed to load categories
          </MyText>
          <MyText style={{ color: Colors.gray_900 }}>
            Please check your connection
          </MyText>
          <MyButton onPress={clearError} containerStyle={styles.errOkBtn}>
            <MyText style={{ color: Colors.gray_900 }}>OK</MyText>
          </MyButton>
        </View>
      )}

      <Pressable style={styles.bannerContainer}>
        <Image source={require("../../../assets/slide.png")} />
      </Pressable>

      <View style={styles.showRoomContainer}>
        <MyText style={styles.showRoomTitle}>Top Showrooms</MyText>
        <MyText style={styles.showRoomViewAll}>View all</MyText>
      </View>
      <FlatList
        data={staticShowRooms}
        contentContainerStyle={{ marginLeft: 10 }}
        horizontal
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Pressable style={styles.showRoomImg}>
            <Image source={require("../../../assets/toyota_pic.png")} />
            <MyText style={{ textAlign: "center" }}>{item.name}</MyText>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  categoryText: {
    fontSize: 10,
    color: Colors.gray_900,
    fontWeight: "600",
    textAlign: "center",
  },
  errOkBtn: {
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.gray_200,
    borderRadius: 8,
  },
  bannerContainer: {
    borderRadius: 8,
    borderColor: Colors.gray_100,
    borderWidth: 1,
    marginVertical: 16,
    marginHorizontal: 5,
  },
  showRoomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
    alignItems: "center",
    width: "90%",
    marginVertical: 5,
  },
  categoryItem: {
    shadowColor: Colors.black,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5, // For Android
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.gray_200,
    paddingVertical: 4,
    paddingHorizontal: 18,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  showRoomTitle: { color: Colors.gray_800, fontSize: 16, fontWeight: "800" },
  showRoomViewAll: {
    color: Colors.danger_500,
    fontSize: 12,
    fontWeight: "500",
  },
  showRoomImg: {
    height: 160,
    width: 152,
    marginHorizontal: 2,
  },
});

export default HomeScreen;
