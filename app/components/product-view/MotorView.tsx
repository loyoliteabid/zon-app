import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";

import { Product } from "../../definitions/DataTypes";
import Colors from "../../../constants/Colors";
import MyText from "../ui/MyText";
import { currencyCode } from "../../../configs/Configs";
import Location from "../shared/Location";
import ActionButtons from "../shared/ActionButtons";

const screenWidth = Dimensions.get("window").width;

const MotorView = ({ product }: { product: Product }) => {
  return (
    <View style={{ backgroundColor: Colors.white }}>
      <ScrollView style={{ backgroundColor: Colors.white, width: screenWidth }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../../../assets/lamb_view.png")}
            width={screenWidth}
            style={{ borderRadius: 8, marginTop: 10 }}
          />
        </View>

        <View style={{ margin: 10 }}>
          <MyText
            style={{
              fontSize: 20,
              fontWeight: "900",
              color: Colors.danger_500,
            }}
          >{`${currencyCode} 99,000`}</MyText>
          <MyText
            style={{
              lineHeight: 24,
              fontSize: 16,
              fontWeight: "800",
              color: Colors.gray_800,
            }}
          >
            {product?.name ?? ""}
          </MyText>
        </View>

        <View
          style={{
            height: 4,
            backgroundColor: Colors.gray_200,
          }}
        />

        <View style={{ margin: 10 }}>
          <MyText
            style={{
              color: Colors.gray_800,
              fontSize: 16,
              fontWeight: "700",
              lineHeight: 24,
            }}
          >
            Details
          </MyText>
        </View>

        <View style={{ margin: 10 }}>
          <View style={styles.specRow}>
            <MyText style={styles.specRowText}>Trim</MyText>
            <MyText style={styles.specRowText}>{product?.trim ?? ""}</MyText>
          </View>
          <View style={styles.specRow}>
            <MyText style={styles.specRowText}>Year</MyText>
            <MyText style={styles.specRowText}>{product?.year ?? ""}</MyText>
          </View>
          <View style={styles.specRow}>
            <MyText style={styles.specRowText}>Kilometers</MyText>
            <MyText style={styles.specRowText}>
              {product?.kilometers ?? ""}
            </MyText>
          </View>
          <View style={styles.specRow}>
            <MyText style={styles.specRowText}>Regional Specs</MyText>
            <MyText style={styles.specRowText}>
              {product?.regionalSpecs ?? ""}
            </MyText>
          </View>
          <View style={styles.specRow}>
            <MyText style={styles.specRowText}>Doors</MyText>
            <MyText style={styles.specRowText}>{product?.doors ?? ""}</MyText>
          </View>
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <View style={[styles.specRow, { justifyContent: "center" }]}>
            <MyText
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: Colors.danger_500,
                lineHeight: 24,
                paddingBottom: 5,
              }}
            >
              Show more details
            </MyText>
          </View>
        </View>

        <View style={{ margin: 10 }}>
          <MyText
            style={{
              color: Colors.gray_800,
              fontSize: 16,
              fontWeight: "700",
              lineHeight: 24,
            }}
          >
            Description
          </MyText>
          <MyText>{product.description ?? ""}</MyText>
        </View>

        <View style={{ margin: 10 }}>
          <MyText
            style={{
              color: Colors.gray_800,
              fontSize: 16,
              fontWeight: "700",
              lineHeight: 24,
            }}
          >
            Location
          </MyText>
          <Location showroom={product.showroom ?? "Toyota Motors"} />
        </View>
      </ScrollView>

      <View style={{ padding: 10 }}>
        <ActionButtons height={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  specRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray_200,
    height: 32,
  },
  specRowText: {
    lineHeight: 24,
    color: Colors.black,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    flex: 1,
  },
});

export default MotorView;
