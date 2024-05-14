import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { SvgXml } from "react-native-svg";
// import { goalIcon } from "../../images/svg/actionsPage/goal-svg";
import { lessons } from "../data/lessons";

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

const LessonsList = ({ level }) => {
  const renderItem = ({ item }) => (
    <View style={[styles.lessonCard, { backgroundColor: setBg() }]}>
      <Text style={styles.ammount}>
        {item.learnedWords.length}/{item.words.length}
      </Text>
      <Text style={styles.date}>{item.date.toLocaleDateString("en-GB")}</Text>
      <TouchableOpacity>
        <Text>NEXT</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      style={styles.slide}
      data={lessons}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingHorizontal: 25,
    gap: 26,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  lessonCard: {
    height: 100,
    width: "100%",
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 26,
    marginBottom: 26,
    ...Platform.select({
      ios: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
    }),
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  ammount: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
    color: "#FFFFFF",
  },
  date: {
    fontFamily: "Poppins-Medium",
    fontSize: 21,
    color: "#FFFFFF",
  },
});

export default LessonsList;
