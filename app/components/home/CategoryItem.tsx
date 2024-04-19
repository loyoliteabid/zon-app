import { Dimensions, StyleSheet, Pressable, View, Image } from "react-native";

import Colors from "../../../constants/Colors";
import { Category } from "../../definitions/DataTypes";
import MyText from "../ui/MyText";

// Images should come from storage, for now loading from local
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

const CategoryItem = ({
  item,
  onPress,
}: {
  item: Category;
  onPress: () => void;
}) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <Pressable
      style={[styles.categoryItem, { width: screenWidth * 0.3 }]}
      onPress={onPress}
    >
      <View style={{ width: 80 }}>
        <Image source={localImagePaths[item.imageSrc ?? "motors"]} />
        <MyText style={styles.categoryText}>{item.name}</MyText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryText: {
    fontSize: 10,
    color: Colors.gray_900,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default CategoryItem;
