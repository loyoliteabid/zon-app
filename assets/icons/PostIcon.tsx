import Svg, {
  Circle,
  Path,
  Defs,
  Stop,
  LinearGradient,
} from "react-native-svg";

interface SvgComponentProps {
  color?: string;
}

const PostIconSvg: React.FC<SvgComponentProps> = ({ color = "#FD312C" }) => {
  return (
    <Svg width={49} height={48} viewBox="0 0 49 48" fill="none">
      <Circle cx={24.2} cy={24} r={18} fill={`url(#gradient_${color})`} />
      <Path
        d="M24.2 30L24.2 18"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <Path
        d="M30.2 24L18.2 24"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <Defs>
        <LinearGradient
          id={`gradient_${color}`}
          x1="42.2"
          y1="6"
          x2="6.20001"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FD312C" />
          <Stop offset={0.5} stopColor="#FD372F" />
          <Stop offset={1} stopColor="#FC573D" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default PostIconSvg;
