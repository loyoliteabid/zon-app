import Svg, { Rect, Path } from "react-native-svg";

interface SvgComponentProps {
  color?: string;
}

const NotifyIconSvg: React.FC<SvgComponentProps> = ({ color = "#101828" }) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Rect x={1.10001} y={0.5} width={23} height={23} fill="none" />
      <Path
        d="M7.04785 7.96942C7.36219 5.14032 9.7535 3 12.6 3V3C15.4465 3 17.8378 5.14032 18.1522 7.96942L18.404 10.2356C18.4072 10.2645 18.4088 10.279 18.4104 10.2933C18.5394 11.4169 18.9051 12.5005 19.4836 13.4725C19.4909 13.4849 19.4984 13.4973 19.5134 13.5222L20.0914 14.4856C20.6159 15.3599 20.8782 15.797 20.8216 16.1559C20.7839 16.3946 20.661 16.6117 20.4757 16.7668C20.1971 17 19.6873 17 18.6678 17H6.53224C5.51269 17 5.00292 17 4.72434 16.7668C4.53898 16.6117 4.41609 16.3946 4.37842 16.1559C4.3218 15.797 4.58407 15.3599 5.10863 14.4856L5.68666 13.5222C5.70162 13.4973 5.70909 13.4849 5.71645 13.4725C6.29489 12.5005 6.66065 11.4169 6.78959 10.2933C6.79123 10.279 6.79284 10.2645 6.79605 10.2356L7.04785 7.96942Z"
        stroke={color}
        strokeWidth={2}
      />
      <Path
        d="M8.60001 17C8.60001 17.5253 8.70347 18.0454 8.90449 18.5307C9.10551 19.016 9.40014 19.457 9.77158 19.8284C10.143 20.1999 10.584 20.4945 11.0693 20.6955C11.5546 20.8965 12.0747 21 12.6 21C13.1253 21 13.6454 20.8965 14.1307 20.6955C14.616 20.4945 15.057 20.1999 15.4284 19.8284C15.7999 19.457 16.0945 19.016 16.2955 18.5307C16.4965 18.0454 16.6 17.5253 16.6 17"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default NotifyIconSvg;
