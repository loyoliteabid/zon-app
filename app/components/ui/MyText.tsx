import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  children: React.ReactNode;
}

const MyText: React.FC<Props> = ({ children, style, ...rest }) => {
  return (
    <Text style={[style]} {...rest}>
      {children}
    </Text>
  );
};

export default MyText;
