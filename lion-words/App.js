import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ActivityIndicator,
} from "react-native";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Main from "./src/components/Main/Main";

SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

export default function App() {
  const [isAnimationComplete, setAnimationComplete] = useState(false);
  const [isAppReady, setAppReady] = useState(false);

  const animation = useMemo(() => new Animated.Value(1), []);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady, animation]);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Poppins-Semibold": require("./src/fonts/Poppins/Poppins-SemiBold.ttf"),
        });
        // await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (error) {
        console.warn("Error loading assets:", error);
      } finally {
        setAppReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    const onAppLoaded = async () => {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.log("error", error);
      }
    };

    if (isAppReady) {
      onAppLoaded();
    }
  }, [isAppReady]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {(!isAnimationComplete || !isAppReady) && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "#ffffff",
              opacity: animation,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <Text>AnimatedApdpLoader</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </Animated.View>
      )}
      {isAnimationComplete && <Main></Main>}
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
