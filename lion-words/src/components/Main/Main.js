import React, { useCallback, useEffect } from "react";
import * as Updates from "expo-updates";
import { Pressable, StyleSheet, View, Text, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Main() {
  const onReloadPress = useCallback(() => {
    if (Platform.OS === "web") {
      location.reload();
    } else {
      Updates.reloadAsync();
    }
  }, []);

  return (
    <View style={styles.content}>
      <StatusBar backgroundColor="#F79433" />
      <Pressable onPress={onReloadPress} style={styles.button}>
        <Text style={styles.buttonText}>Run Again</Text>
      </Pressable>
      <Text>some text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Poppins-Semibold",
  },
});
