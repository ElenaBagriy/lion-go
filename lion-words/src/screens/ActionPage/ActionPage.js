import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import ChatBubble from "react-native-chat-bubble";
import { StatusBar } from "expo-status-bar";
import Button from "../../components/Button/Button";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import { goalIcon } from "../../images/svg/actionsPage/goal-svg";
import PaginationDots from "../../components/PaginationDots/PaginationDots";

const ActionPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={false} animated={true} />
      <LinearGradient colors={["#F2C600", "#FFDA32"]} style={styles.background}>
        <TouchableOpacity>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Diam</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Lang</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.levelNav}>
        <SvgXml xml={goalIcon} />
        <Text style={styles.levelTextMain}>Level</Text>
        <View style={styles.levelWrapper}>
          <Text style={styles.levelTextSecondary}>A1.1</Text>
        </View>
      </View>
      <PaginationDots total={8} pageNumber={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: 30,
  },
  background: {
    height: 121,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingBottom: 29,
    paddingHorizontal: 25,
  },
  levelNav: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 14,
    marginBottom: 11,
  },
  levelWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2C600",
    borderRadius: 4,
    height: 20,
    paddingLeft: 6,
    paddingRight: 6,
  },
  levelTextMain: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#650000",
  },
  levelTextSecondary: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#650000",
  },
});

export default ActionPage;
