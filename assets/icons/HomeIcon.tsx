import Svg, { Path } from "react-native-svg";

interface SvgComponentProps {
  color?: string;
}

const HomeIconSvg: React.FC<SvgComponentProps> = ({ color = "#F04438" }) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32">
      <Path
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.66669 17.0127C6.66669 15.2024 6.66669 14.2972 7.03264 13.5016C7.39858 12.7059 8.08584 12.1168 9.46036 10.9387L10.7937 9.79582C13.2781 7.66632 14.5203 6.60156 16 6.60156C17.4797 6.60156 18.7219 7.66632 21.2064 9.79582L22.5397 10.9387C23.9142 12.1168 24.6015 12.7059 24.9674 13.5016C25.3334 14.2972 25.3334 15.2024 25.3334 17.0127V22.6666C25.3334 25.1807 25.3334 26.4378 24.5523 27.2189C23.7713 27.9999 22.5142 27.9999 20 27.9999H12C9.48586 27.9999 8.22878 27.9999 7.44774 27.2189C6.66669 26.4378 6.66669 25.1807 6.66669 22.6666V17.0127Z"
      />
      <Path
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.3334 28V21C19.3334 20.4477 18.8856 20 18.3334 20H13.6667C13.1144 20 12.6667 20.4477 12.6667 21V28"
      />
    </Svg>
  );
};

export default HomeIconSvg;
