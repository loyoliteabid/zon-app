import { StyleSheet, View, Image } from "react-native";
import Colors from "../../../constants/Colors";
import MyText from "../ui/MyText";

const Location = ({ showroom }: { showroom: string }) => {
  return (
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
          <MyText style={styles.locationInfo}>{showroom}</MyText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  showRoomImg: {
    height: 56,
    width: 56,
    borderRadius: 8,
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
});

export default Location;
