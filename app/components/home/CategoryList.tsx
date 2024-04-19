import { StyleSheet, View } from "react-native";

import { Category } from "../../definitions/DataTypes";
import CategoryItem from "./CategoryItem";
import MyText from "../ui/MyText";
import Colors from "../../../constants/Colors";
import MyButton from "../ui/MyButton";
import HttpError from "../shared/HttpError";

const CategoryList = ({
  categories,
  isLoading,
  error,
  onPressCategoryItem,
  clearError,
}: {
  categories: Category[];
  isLoading: boolean;
  error: Error | null;
  onPressCategoryItem: (c: Category) => void;
  clearError: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        {categories.map((item, i) => (
          <CategoryItem
            key={`category_${i}`}
            item={item}
            onPress={() => onPressCategoryItem(item)}
          />
        ))}
      </View>

      {isLoading && (
        <View>
          <MyText style={{ color: Colors.gray_100 }}>Loading categories</MyText>
        </View>
      )}

      {!!error && (
        <HttpError
          errMsg="Failed to load categories"
          additionalMsg="Please check your connection"
          clearError={clearError}
        />
      )}
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
  categoryContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default CategoryList;
