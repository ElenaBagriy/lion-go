import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../../../components/Button/Button";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const emailHandler = (text) => setEmail(text);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../images/forgotPass.png")}
        />
        <Text style={styles.text}>
          Enter the email address to get an OTP code to reset your password.
        </Text>
        <View style={styles.form}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#9E9E9E"
              value={email}
              onChangeText={emailHandler}
              inputmode="email"
              keyboardType="email-address"
              cursorColor="#650000"
              autoComplete="email"
            />
            <Image
              style={[styles.icon, { width: 16.67, height: 15 }]}
              source={require("../../../images/form/email.png")}
            />
          </View>
        </View>
        <Button
          title="GET CODE"
          navigation={navigation}
          component={"PasswordReset"}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 56,
  },
  logo: {
    width: 135,
    height: 135,
    marginTop: 21,
  },
  text: {
    marginTop: 37,
    width: 291,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#650000",
    textAlign: "center",
  },
  form: {
    width: "100%",
    marginTop: 22,
    marginBottom: 45,
    alignItems: "center",
  },
  input: {
    width: 291,
    paddingLeft: 52,
    height: 57,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    fontSize: 16,
    color: "#650000",
    fontFamily: "Poppins-Regular",
  },
  icon: {
    position: "absolute",
    left: 21.92,
    top: 20,
    width: 18,
    height: 18,
  },
  hide: {
    position: "absolute",
    right: 23,
    top: 21.92,
  },
  onRememberBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginTop: 26,
    marginBottom: 20,
  },
  checkBox: {
    borderColor: "#FFD57B",
    borderWidth: 1,
    borderRadius: 4,
    width: 16,
    height: 16,
  },
  checkBoxChecked: {
    backgroundColor: "#FFD57B",
    alignItems: "center",
    justifyContent: "center",
  },
  textCheck: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#650000",
  },
  passwordLink: {
    marginTop: 26,
  },
  textLink: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#650000",
  },
  btmWrapper: {
    alignItems: "center",
    gap: 30,
  },
  dividerWrapper: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: 71,
    height: 1,
    backgroundColor: "#EEEEEE",
  },
  socialText: {
    fontFamily: "Poppins-Light",
    fontSize: 18,
    color: "#650000",
  },
  linkWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  socialBtn: {
    width: 88,
    height: 60,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
  },
  socialImg: {
    width: 24,
    height: 24,
  },
});

export default ForgotPassword;
