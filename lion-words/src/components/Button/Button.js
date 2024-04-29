import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Button = ({ navigation, component, title, color }) => {
  const [isLogInPressed, setIsLogInPressed] = useState(false);

  const handleLogInPressIn = () => {
    setIsLogInPressed(true);
  };

  const handleLogInPressOut = () => {
    setIsLogInPressed(false);
  };

  return (
    <TouchableHighlight
      onPress={() =>
        component ? navigation.navigate(`${component}`) : console.log("press")
      }
      style={styles.touchable}
      onPressIn={
        color === "white" ? handleLogInPressIn : console.log("onpressIn")
      }
      onPressOut={
        color === "white" ? handleLogInPressOut : console.log("onpressOut")
      }
    >
      <View
        style={[
          styles.button,
          color === "white" && styles.buttonWhite,
          isLogInPressed && styles.buttonPressed,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            color === "white" && styles.buttonTextYellow,
            isLogInPressed && styles.buttonTextPressed,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 20,
    position: "relative",
  },
  title: {
    color: "#650000",
    fontSize: 37,
    fontFamily: "Poppins-Semibold",
  },
  text: {
    color: "#650000",
    fontSize: 19,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    height: 99,
  },
  button: {
    backgroundColor: "#F2C700",
    width: 302,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonPressed: {
    backgroundColor: "#F2C700",
    borderColor: "transparent",
  },
  buttonWhite: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2C700",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "Poppins-Light",
    color: "#ffffff",
  },
  buttonTextYellow: {
    color: "#F2C600",
  },
  buttonTextPressed: {
    color: "#ffffff",
  },
});

export default Button;
