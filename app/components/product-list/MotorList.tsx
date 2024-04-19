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
import { currencyCode } from "../../../configs";
import Colors from "../../../constants/Colors";

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
        <View style={{ margin: 10 }}>
          <Pressable
            onPress={() => onPressProductListItem(item)}
            style={styles.imageContainer}
          >
            <Image
              source={require("../../../assets/Lamborgini.png")}
              style={{ width: screenWidth - 20, borderRadius: 8 }}
            />
          </Pressable>
          <MyText
            style={{
              fontSize: 16,
              fontWeight: "900",
              color: Colors.danger_500,
            }}
          >{`${currencyCode} 99,000`}</MyText>
          <MyText
            style={{ fontSize: 16, color: Colors.gray_800, fontWeight: "700" }}
          >
            {item.name}
          </MyText>
          <View style={{ marginVertical: 10 }}>
            {item.tags?.map((tag, i) => (
              <MyText key={`tag_${i}`}>{`${tag} | `}</MyText>
            ))}
          </View>
          <MyText
            style={{ fontSize: 10, color: Colors.gray_600, fontWeight: "800" }}
          >{`Year ${item.year}`}</MyText>
        </View>
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 8,
  },
});

export default MotorList;
