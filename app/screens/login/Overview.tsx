import { Image, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import MyButton from "../../components/ui/MyButton";
import Colors from "../../../constants/Colors";
import EmailIconSvg from "../../../assets/icons/EmailIcon";
import MyText from "../../components/ui/MyText";
import { useContext } from "react";
import { AuthContext } from "../../store/Auth-context";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../definitions/RouteModel";

const LoginOverview = () => {
  const authCtx = useContext(AuthContext);

  const onSkipAuth = () => {
    authCtx.skipAuthentication();
  };

  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../../../assets/login_overview.png")} />
      </View>
      <View style={{ gap: 18, marginHorizontal: 16 }}>
        <LinearGradient
          colors={["#F06100", "#F04900", "#F03000", "#F00030", "#F0006D"]}
          style={styles.createBtnContainer}
        >
          <MyButton
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <MyText style={styles.primaryBtnTexxt}>Create new Account</MyText>
          </MyButton>
        </LinearGradient>

        <MyButton
          onPress={() => {
            navigation.navigate("Login");
          }}
          containerStyle={[styles.createBtnContainer, styles.emailBtnContainer]}
        >
          <View style={{ flexDirection: "row", gap: 12 }}>
            <EmailIconSvg color={Colors.gray_900} />
            <MyText
              style={[styles.primaryBtnTexxt, { color: Colors.gray_700 }]}
            >
              Continue with Email
            </MyText>
          </View>
        </MyButton>
      </View>
      <View style={{ gap: 18 }}>
        <MyText style={styles.termsText}>
          By signing up, you agree to our{" "}
          <MyText style={{ color: Colors.danger_500, fontWeight: "700" }}>
            Terms of Service
          </MyText>{" "}
          &{" "}
          <MyText style={{ color: Colors.danger_500, fontWeight: "700" }}>
            Privacy Policy
          </MyText>
        </MyText>

        <MyButton onPress={onSkipAuth}>
          <MyText style={styles.signUpLaterText}>Sign up later</MyText>
        </MyButton>

        <View style={styles.loginContainer}>
          <MyText style={styles.loginText}>Already have an account? </MyText>
          <MyButton onPress={() => {}}>
            <MyText style={styles.loginBtnText}>Log in</MyText>
          </MyButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.white,
  },
  createBtnContainer: {
    height: 40,
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    opacity: 0.85,
    gap: 8,
  },
  emailBtnContainer: {
    paddingVertical: 10,
    borderColor: Colors.gray_300,
    borderWidth: 1,
    gap: 12,
  },
  primaryBtnTexxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
  },
  termsText: {
    color: Colors.black,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
  },
  signUpLaterText: {
    textAlign: "center",
    color: Colors.danger_500,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 18,
    textDecorationLine: "underline",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 38,
  },
  loginBtnText: {
    color: Colors.danger_500,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 38,
  },
});

export default LoginOverview;
