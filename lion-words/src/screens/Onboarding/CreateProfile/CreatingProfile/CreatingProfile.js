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
import Button from "../../../../components/Button/Button";

const CreatingProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecure, setSecure] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onPasswordShowToggle = (x) => {
    setSecure((prev) => !prev);
  };
  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  const loginWithSocial = () => {};
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Image
            style={styles.logo}
            source={require("../../../../images/createProfileLion.png")}
          />
          <View style={styles.form}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#9E9E9E"
                value={name}
                onChangeText={nameHandler}
                inputmode="text"
                cursorColor="#650000"
                enterKeyHint="next"
              />
              <Image
                style={styles.icon}
                source={require("../../../../images/form/name.png")}
              />
            </View>
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
                source={require("../../../../images/form/email.png")}
              />
            </View>
            <View style={{ position: "relative" }}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#9E9E9E"
                value={password}
                onChangeText={passwordHandler}
                secureTextEntry={isSecure}
                inputmode="text"
                cursorColor="#650000"
              />
              <Image
                style={[styles.icon, { width: 15, height: 16.67 }]}
                source={require("../../../../images/form/password.png")}
              />
              <TouchableOpacity
                style={styles.hide}
                onPress={onPasswordShowToggle}
              >
                <Image
                  style={{ width: 16.67, height: 14.17 }}
                  source={require("../../../../images/form/hide.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={toggleCheckBox}
            style={styles.onRememberBtn}
          >
            <View
              style={[styles.checkBox, isChecked && styles.checkBoxChecked]}
              value={isChecked}
              onValueChange={toggleCheckBox}
            >
              {isChecked && (
                <Image
                  source={require("../../../../images/form/checked.png")}
                />
              )}
            </View>
            <Text style={styles.textCheck}>Remember me</Text>
          </TouchableOpacity>
          <Button
            title="SIGN UP"
            navigation={navigation}
            // component={"ChooseNativeLanguage"}
          />
        </View>
        <View style={styles.btmWrapper}>
          <Text style={styles.socialText}>or continue with</Text>
          <View style={styles.linkWrapper}>
            <TouchableOpacity
              style={styles.socialBtn}
              onPress={loginWithSocial}
            >
              <Image
                style={styles.socialImg}
                source={require("../../../../images/social/facebook-login.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialBtn}
              onPress={loginWithSocial}
            >
              <Image
                style={[styles.socialImg, { width: 23.04 }]}
                source={require("../../../../images/social/google-login.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialBtn}
              onPress={loginWithSocial}
            >
              <Image
                style={styles.socialImg}
                source={require("../../../../images/social/apple-login.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 56,
  },
  mainContent: {
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 139,
    height: 105,
    marginTop: 31,
  },
  form: {
    width: "100%",
    gap: 32,
    marginTop: 31,
  },
  input: {
    width: "100%",
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
  btmWrapper: {
    alignItems: "center",
    gap: 30,
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

export default CreatingProfile;