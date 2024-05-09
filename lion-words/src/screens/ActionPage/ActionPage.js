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
import { LinearGradient } from "expo-linear-gradient";

const ActionPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#F2C600"
        hidden={false}
        animated={true}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["#F2C600", "#FFDA32"]}
        style={styles.background}
      />
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
  background: {
    // position: "absolute",
    // left: 0,
    // right: 0,
    // top: 0,
    height: 300,
    width: "100%",
  },
});

export default ActionPage;
