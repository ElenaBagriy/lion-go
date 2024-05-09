import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// import Dots from "react-native-dots-pagination";

const PaginationDots = ({ page }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(page);
  }, [active]);

  return (
    <View style={styles.dotsWrapper}>
      <View style={[styles.dot, active === "Home" && styles.activeDot]} />
      <View
        style={[
          styles.dot,
          active === "ChooseNativeLanguage" && styles.activeDot,
        ]}
      />
      <View
        style={[
          styles.dot,
          active === "ChooseLearningLanguage" && styles.activeDot,
        ]}
      />
      <View
        style={[
          styles.dot,
          active === "ChooseSourceScreen" && styles.activeDot,
        ]}
      />
      <View
        style={[
          styles.dot,
          active === "ChooseReasonsScreen" && styles.activeDot,
        ]}
      />
      <View
        style={[
          styles.dot,
          active === "SetRemindersScreen" && styles.activeDot,
        ]}
      />
      <View
        style={[
          styles.dot,
          active === "CreateProfileWelcomeScreen" && styles.activeDot,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dotsWrapper: {
    flexDirection: "row",
    gap: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "#EFEFEF",
  },
  activeDot: {
    backgroundColor: "#FFD57B",
    width: 16,
  },
});

export default PaginationDots;
