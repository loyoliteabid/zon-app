import type { CompositeNavigationProp } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Product } from "./DataTypes";

/*
Note: The type containing the mappings must be a type alias
(e.g. type RootStackParamList = { ... }). It cannot be an interface
(e.g. interface RootStackParamList { ... }).
It also shouldn't extend ParamListBase (e.g. interface RootStackParamList extends ParamListBase { ... }).
Doing so will result in incorrect type checking where it allows you to pass incorrect route names.
*/

// refer https://reactnavigation.org/docs/typescript/
export type RootStackParamList = {
  Overview: undefined;
  Register: undefined;
  Login: undefined;
  HomeOverview: undefined;
  ProductList: {
    categoryId?: string;
    categoryName?: string;
    type?: string;
  };
  ProductView: {
    product?: Product;
    type?: string;
  };
};

export type RootTabParamList = {
  Home: undefined;
  Activity: undefined;
  Post: undefined;
  Chat: undefined;
  User: undefined;
};

export type ScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;
