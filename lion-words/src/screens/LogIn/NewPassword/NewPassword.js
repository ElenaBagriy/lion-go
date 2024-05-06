import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Button from "../../../components/Button/Button";

const NewPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");

  const [isSecure, setSecure] = useState(true);

  const passwordHandler = (text) => setPassword(text);
  const repeatPasswordHandler = (text) => setrepeatPassword(text);

  const onPasswordShowToggle = (x) => {
    setSecure((prev) => !prev);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../images/newPass.png")}
        />
        <Text style={styles.text}>
          Save the new password in a safe place, if you forget it then you have
          to do a password reset again.
        </Text>
        <View style={styles.form}>
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles.input}
              placeholder="New password"
              placeholderTextColor="#9E9E9E"
              value={password}
              onChangeText={passwordHandler}
              secureTextEntry={isSecure}
              inputmode="text"
              cursorColor="#650000"
            />
            <Image
              style={[styles.icon, { width: 15, height: 16.67 }]}
              source={require("../../../images/form/password.png")}
            />
            <TouchableOpacity
              style={styles.hide}
              onPress={onPasswordShowToggle}
            >
              <Image
                style={{ width: 16.67, height: 14.17 }}
                source={require("../../../images/form/hide.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles.input}
              placeholder="New password"
              placeholderTextColor="#9E9E9E"
              value={repeatPassword}
              onChangeText={repeatPasswordHandler}
              secureTextEntry={isSecure}
              inputmode="text"
              cursorColor="#650000"
            />
            <Image
              style={[styles.icon, { width: 15, height: 16.67 }]}
              source={require("../../../images/form/password.png")}
            />
            <TouchableOpacity
              style={styles.hide}
              onPress={onPasswordShowToggle}
            >
              <Image
                style={{ width: 16.67, height: 14.17 }}
                source={require("../../../images/form/hide.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          title="SAVE"
          navigation={navigation}
          component={"WelcomeBack"}
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
    width: 114,
    height: 114,
    marginTop: 42,
  },
  text: {
    width: 291,
    marginTop: 37,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#650000",
    textAlign: "center",
  },
  form: {
    width: "100%",
    gap: 20,
    marginTop: 25,
    marginBottom: 42,
    alignItems: "center",
  },
  input: {
    width: 291,
    paddingLeft: 52,
    height: 57,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    fontSize: 14,
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
});

export default NewPassword;
