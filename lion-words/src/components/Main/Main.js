import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home/Home";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import ChooseNativeLanguage from "../../screens/Onboarding/ChooseNativeLanguage/ChooseNativeLanguage";
import ChooseLearningLanguage from "../../screens/Onboarding/ChooseLearningLanguage/ChooseLearningLanguage";
const MainStack = createStackNavigator();

export default function Main() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.keyboardContainer}
    >
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName={Home}
          screenOptions={{
            // headerBackImageSource: require("../../images/backArrow.png"),
            headerTintColor: "#650000",
          }}
        >
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="ChooseNativeLanguage"
            component={ChooseNativeLanguage}
            options={({ navigation }) => ({
              title: "",
              // headerBackImageSource: require("../../images/backArrow.png"),
              headerBackTitleVisible: false,
              headerShadowVisible: false,
            })}
          />
          <MainStack.Screen
            name="ChooseLearningLanguage"
            component={ChooseLearningLanguage}
            options={({ navigation }) => ({
              title: "",
              // headerBackImageSource: require("../../images/backArrow.png"),
              headerBackTitleVisible: false,
              headerShadowVisible: false,
            })}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
});
