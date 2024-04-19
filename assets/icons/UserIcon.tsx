import Svg, { Circle, Path } from "react-native-svg";

interface SvgComponentProps {
  color?: string;
}

const UserIconSvg: React.FC<SvgComponentProps> = ({ color = "#101828" }) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Circle
        cx={12.2001}
        cy={7}
        r={4}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M5.53796 18.3206C6.19904 15.5269 8.9718 14 11.8427 14H12.5575C15.4283 14 18.2011 15.5269 18.8622 18.3206C18.9901 18.8611 19.0918 19.4268 19.149 20.0016C19.2037 20.5512 18.7524 21 18.2001 21H6.20007C5.64779 21 5.19649 20.5512 5.25118 20.0016C5.30838 19.4268 5.41004 18.8611 5.53796 18.3206Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default UserIconSvg;
