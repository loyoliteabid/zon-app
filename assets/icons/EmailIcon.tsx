import Svg, { Path } from "react-native-svg";

interface SvgComponentProps {
  color?: string;
}

const EmailIconSvg: React.FC<SvgComponentProps> = ({ color = "#101828" }) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM2 6L12 13L22 6"
      />
    </Svg>
  );
};

export default EmailIconSvg;
