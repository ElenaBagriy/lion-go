import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import ChatBubble from "react-native-chat-bubble";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const [isStartPressed, setIsStartPressed] = useState(false);
  const [isLogInPressed, setIsLogInPressed] = useState(false);

  const handleStartPressIn = () => {
    setIsStartPressed(true);
  };

  const handleStartPressOut = () => {
    setIsStartPressed(false);
  };

  const handleLogInPressIn = () => {
    setIsLogInPressed(true);
  };

  const handleLogInPressOut = () => {
    setIsLogInPressed(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#FFFFFF" />
      <ChatBubble
        isOwnMessage={true}
        bubbleColor="#FAFAFA"
        tailColor="#D3D1D1"
        withTail={true}
        style={styles.speechBubble}
        // onPress={() => console.log("Bubble Pressed!")}
      >
        <Text style={styles.speechText}>Hello, I'm Lion!</Text>
      </ChatBubble>
      <View style={{ gap: 12, alignItems: "center", marginBottom: 54 }}>
        <Image
          style={styles.logo}
          source={require("../../images/CrownLion.png")}
        />
        <Text style={styles.title}>LIONGO</Text>
        <Text style={styles.text}>
          Learn Languages whenever and wherever you want. It's free forever.
        </Text>
      </View>
      <View style={{ gap: 25 }}>
        <TouchableHighlight
          underlayColor="#FFD61B"
          onPress={() => console.log("GET STARTED pressed!")}
          style={styles.button}
          onPressIn={handleStartPressIn}
          onPressOut={handleStartPressOut}
        >
          <Text
            style={[
              styles.buttonText,
              isStartPressed && styles.buttonTextPressed,
            ]}
          >
            GET STARTED
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#FFD61B"
          onPress={() => console.log("Pressed!")}
          style={[styles.button, styles.buttonWhite]}
          onPressIn={handleLogInPressIn}
          onPressOut={handleLogInPressOut}
        >
          <Text
            style={[
              styles.buttonText,
              styles.buttonTextYellow,
              isLogInPressed && styles.buttonTextPressed,
            ]}
          >
            LOG IN
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 42,
  },
  logo: {
    width: 206,
    height: 244,
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
  buttonWhite: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2C700",
    borderWidth: 1,
  },
  speechBubble: {
    borderWidth: 1,
    borderColor: "#D3D1D1",
    height: 34,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    marginTop: 56,
  },
  speechText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#650000",
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
    // color: "#650000", // измените цвет текста, как вам нужно при нажатии
  },
});

export default Home;
