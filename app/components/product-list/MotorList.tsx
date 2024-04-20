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

          <View style={styles.locationContainer}>
            <Image
              source={require("../../../assets/toyota_pic.png")}
              style={styles.showRoomImg}
            />
            <View>
              <View style={styles.locationInfoRow}>
                <MyText style={{ fontSize: 14 }}>Location:</MyText>
                <MyText style={styles.locationInfo}>
                  Deira, Dubai, United Arab Emirates
                </MyText>
              </View>
              <View style={styles.locationInfoRow}>
                <MyText style={{ fontSize: 14 }}>Posted on:</MyText>
                <MyText style={styles.locationInfo}>14/3/24</MyText>
              </View>
              <View style={styles.locationInfoRow}>
                <MyText style={{ fontSize: 14 }}>Posted By:</MyText>
                <MyText style={styles.locationInfo}>
                  {item.showroom ?? "Toyota Motors"}
                </MyText>
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <MyButton
              onPress={() => {}}
              containerStyle={styles.chatBtnContainer}
            >
              <MyText style={styles.chatBtnText}>Chat</MyText>
            </MyButton>
            <LinearGradient
              colors={["#F06100", "#F04900", "#F03000", "#F00030", "#F0006D"]}
              style={styles.callBtnContainer}
            >
              <MyButton onPress={() => {}}>
                <MyText style={styles.callBtnText}>Call</MyText>
              </MyButton>
            </LinearGradient>
          </View>
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
  locationContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  locationInfoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationInfo: {
    fontSize: 10,
    color: Colors.gray_600,
    fontWeight: "700",
  },
  showRoomImg: {
    height: 56,
    width: 56,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  chatBtnContainer: {
    backgroundColor: Colors.danger_10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.danger_500,
    height: 32,
    width: 173,
    justifyContent: "center",
    alignItems: "center",
  },
  chatBtnText: {
    color: Colors.danger_500,
    fontWeight: "600",
    fontSize: 14,
  },
  callBtnContainer: {
    height: 32,
    width: 173,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  callBtnText: {
    color: Colors.white,
    fontWeight: "600",
    fontSize: 14,
  },
});

export default MotorList;
