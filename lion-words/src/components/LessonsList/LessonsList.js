import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { SvgXml } from "react-native-svg";
// import { goalIcon } from "../../images/svg/actionsPage/goal-svg";
import { lessons } from "../../data/lessons";
import LessonCard from "./LessonCard/LessonCard";

const LessonsList = ({ navigation }) => {
  return (
    <FlatList
      style={styles.slide}
      data={lessons}
      renderItem={({ item, index }) => (
        <LessonCard item={item} index={index} navigation={navigation} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingHorizontal: 25,
  },
});

export default LessonsList;
