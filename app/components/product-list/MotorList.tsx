import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import { Product } from "../../definitions/DataTypes";
import MyText from "../ui/MyText";
import { currencyCode } from "../../../configs/Configs";
import Colors from "../../../constants/Colors";
import MyButton from "../ui/MyButton";
import { LinearGradient } from "expo-linear-gradient";
import Location from "../shared/Location";
import ActionButtons from "../shared/ActionButtons";

const MotorList = ({
  products,
  onPressProductListItem,
}: {
  products: Product[];
  onPressProductListItem: (c: Product) => void;
}) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => (
        <View style={styles.renderContainer}>
          <Pressable
            onPress={() => onPressProductListItem(item)}
            style={styles.imageContainer}
          >
            <Image
              source={require("../../../assets/Lamborgini.png")}
              style={{ width: screenWidth - 20, borderRadius: 8 }}
            />
          </Pressable>

          <MyText style={styles.price}>{`${currencyCode} 99,000`}</MyText>
          <MyText style={styles.name}>{item.name}</MyText>

          <View style={{ marginVertical: 3, flexDirection: "row" }}>
            {item.tags?.map((tag, i) => (
              <MyText key={`tag_${i}`}>{`${tag} | `}</MyText>
            ))}
          </View>

          <View style={{ marginVertical: 3, flexDirection: "row" }}>
            <MyText>{item.regionalSpecs ?? ""}</MyText>
            <MyText>, {item.exteriorColor ?? ""}</MyText>
          </View>

          <MyText
            style={{ fontSize: 10, color: Colors.gray_600, fontWeight: "800" }}
          >{`Year ${item.year}`}</MyText>

          <Location showroom={item.showroom ?? "Toyota Motors"} />

          <ActionButtons />
        </View>
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};

const styles = StyleSheet.create({
  renderContainer: {
    margin: 10,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  imageContainer: {
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    color: Colors.gray_800,
    fontWeight: "700",
  },
  price: {
    fontSize: 16,
    fontWeight: "900",
    color: Colors.danger_500,
  },
});

export default MotorList;
