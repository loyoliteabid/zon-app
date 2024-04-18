import { Image, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import MyButton from "../../components/ui/MyButton";
import Colors from "../../../constants/Colors";
import EmailIconSvg from "../../../assets/icons/EmailIcon";
import MyText from "../../components/ui/MyText";

const LoginOverview = () => {
  return (
    <View
      style={{ flex: 1, marginVertical: 40, justifyContent: "space-between" }}
    >
      <Image source={require("../../../assets/login_overview.png")} />
      <View style={{ gap: 18 }}>
        <LinearGradient
          colors={["#F06100", "#F04900", "#F03000", "#F00030", "#F0006D"]}
          style={styles.createBtnContainer}
        >
          <MyButton onPress={() => {}}>
            <MyText style={styles.primaryBtnTexxt}>Create new Account</MyText>
          </MyButton>
        </LinearGradient>

        <MyButton
          onPress={() => {}}
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

        <MyButton onPress={() => {}}>
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
