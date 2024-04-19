import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activity from "../screens/activity/Activity";
import Post from "../screens/posts/Post";
import Chat from "../screens/chats/Chat";
import User from "../screens/user/User";
import HomeStack from "./HomeStack";
import HomeIconSvg from "../../assets/icons/HomeIcon";
import NotifyIconSvg from "../../assets/icons/NotificationIcon";
import PostIconSvg from "../../assets/icons/PostIcon";
import ChatIconSvg from "../../assets/icons/ChatIcon";
import UserIconSvg from "../../assets/icons/UserIcon";
import Colors from "../../constants/Colors";

const BottomTabs = createBottomTabNavigator();

const AuthenticatedStack = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{ tabBarActiveTintColor: Colors.danger_500 }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Home Overview",
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <HomeIconSvg color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="Activity"
        component={Activity}
        options={{
          title: "Activities",
          tabBarLabel: "Activity",
          tabBarIcon: ({ color, size }) => <NotifyIconSvg color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="Post"
        component={Post}
        options={{
          title: "Posts",
          tabBarLabel: "Post",
          tabBarIcon: ({ color, size }) => <PostIconSvg color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Chats",
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => <ChatIconSvg color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="User"
        component={User}
        options={{
          title: "User Profile",
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => <UserIconSvg color={color} />,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default AuthenticatedStack;
