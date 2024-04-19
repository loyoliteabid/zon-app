import Svg, { Path } from "react-native-svg";

interface SvgComponentProps {
  color?: string;
}

const ChatIconSvg: React.FC<SvgComponentProps> = ({ color = "#101828" }) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        d="M21.2001 11.5C21.2035 12.8199 20.8951 14.1219 20.3001 15.3C19.5945 16.7118 18.5098 17.8992 17.1675 18.7293C15.8252 19.5594 14.2783 19.9994 12.7001 20C11.3802 20.0035 10.0782 19.6951 8.90007 19.1L3.20007 21L5.10007 15.3C4.505 14.1219 4.19663 12.8199 4.20007 11.5C4.20068 9.92179 4.64069 8.37488 5.47079 7.03258C6.3009 5.69028 7.48833 4.6056 8.90007 3.90003C10.0782 3.30496 11.3802 2.99659 12.7001 3.00003H13.2001C15.2844 3.11502 17.2531 3.99479 18.7292 5.47089C20.2053 6.94699 21.0851 8.91568 21.2001 11V11.5Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChatIconSvg;
