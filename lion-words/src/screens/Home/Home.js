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
import Button from "../../components/Button/Button";
import PaginationDots from "../../components/PaginationDots/PaginationDots";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#FFFFFF" />
      <PaginationDots page="Home" />
      <ChatBubble
        isOwnMessage={true}
        bubbleColor="#FAFAFA"
        tailColor="#D3D1D1"
        withTail={true}
        style={styles.speechBubble}
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
        <Button
          title="GET STARTED"
          navigation={navigation}
          component={"ChooseNativeLanguage"}
        />
        <Button
          title="LOG IN"
          navigation={navigation}
          component={"SignIn"}
          color="white"
        />
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
    paddingTop: 47,
  },
  speechBubble: {
    borderWidth: 1,
    borderColor: "#D3D1D1",
    height: 34,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 56,
  },
  speechText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#650000",
  },
  logo: {
    width: 206,
    height: 244,
    marginTop: 18,
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
  touchable: {
    borderRadius: 20,
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

export default Home;
