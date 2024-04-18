import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  children: React.ReactNode;
  onPress: () => void;
  containerStyle?: React.ComponentProps<typeof View>["style"];
  buttonStyle?: React.ComponentProps<typeof View>["style"];
  pressedStyle?: React.ComponentProps<typeof Pressable>["style"];
};

const MyButton: React.FC<Props> = (props) => {
  return (
    <View style={props.containerStyle}>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) =>
          pressed && props.pressedStyle ? [props.pressedStyle] : {}
        }
      >
        <View style={[props.buttonStyle]}>{props.children}</View>
      </Pressable>
    </View>
  );
};

export default MyButton;
