import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import MyText from "../ui/MyText";
import { staticShowRooms } from "../../data/seed";
import Colors from "../../../constants/Colors";

const ShowRoomList = () => {
  return (
    <View>
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
  showRoomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  showRoomTitle: {
    color: Colors.gray_800,
    fontSize: 16,
    fontWeight: "800",
  },
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

export default ShowRoomList;
