import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home/Home";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import ChooseNativeLanguage from "../../screens/Onboarding/ChooseNativeLanguage/ChooseNativeLanguage";
import ChooseLearningLanguage from "../../screens/Onboarding/ChooseLearningLanguage/ChooseLearningLanguage";
import ChooseSourceScreen from "../../screens/Onboarding/ChooseSourceScreen/ChooseSourceScreen";
import ChooseReasonsScreen from "../../screens/Onboarding/ChooseReasonsScreen/ChooseReasonsScreen";
import SetRemindersScreen from "../../screens/Onboarding/SetRemindersScreen/SetRemindersScreen";
import CreateProfileWelcomeScreen from "../../screens/Onboarding/CreateProfile/CreateProfileWelcomeScreen/CreateProfileWelcomeScreen";
import CreatingProfile from "../../screens/Onboarding/CreateProfile/CreatingProfile/CreatingProfile";
import ChooseIdentity from "../../screens/Onboarding/CreateProfile/ChooseIdentity/ChooseIdentity";
import ChooseBirthday from "../../screens/Onboarding/CreateProfile/ChooseBirthday/ChooseBirthday";
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
          <MainStack.Screen
            name="ChooseSourceScreen"
            component={ChooseSourceScreen}
            options={({ navigation }) => ({
              title: "",
              // headerBackImageSource: require("../../images/backArrow.png"),
              headerBackTitleVisible: false,
              headerShadowVisible: false,
            })}
          />
          <MainStack.Screen
            name="ChooseReasonsScreen"
            component={ChooseReasonsScreen}
            options={({ navigation }) => ({
              title: "",
              // headerBackImageSource: require("../../images/backArrow.png"),
              headerBackTitleVisible: false,
              headerShadowVisible: false,
            })}
          />
          <MainStack.Screen
            name="SetRemindersScreen"
            component={SetRemindersScreen}
            options={({ navigation }) => ({
              title: "",
              // headerBackImageSource: require("../../images/backArrow.png"),
              headerBackTitleVisible: false,
              headerShadowVisible: false,
            })}
          />
          <MainStack.Group>
            <MainStack.Screen
              name="CreateProfileWelcomeScreen"
              component={CreateProfileWelcomeScreen}
              options={({ navigation }) => ({
                title: "",
                // headerBackImageSource: require("../../images/backArrow.png"),
                headerBackTitleVisible: false,
                headerShadowVisible: false,
              })}
            />
            <MainStack.Screen
              name="CreatingProfile"
              component={CreatingProfile}
              options={({ navigation }) => ({
                title: "Creating a Profile",
                // headerBackImageSource: require("../../images/backArrow.png"),
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Poppins-Regular",
                  fontSize: 19,
                  color: "#650000",
                },
              })}
            />
            <MainStack.Screen
              name="ChooseIdentity"
              component={ChooseIdentity}
              options={({ navigation }) => ({
                title: "Choose your identity",
                // headerBackImageSource: require("../../images/backArrow.png"),
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Poppins-Regular",
                  fontSize: 19,
                  color: "#650000",
                },
              })}
            />
            <MainStack.Screen
              name="ChooseBirthday"
              component={ChooseBirthday}
              options={({ navigation }) => ({
                title: "When is Your Birthday?",
                // headerBackImageSource: require("../../images/backArrow.png"),
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Poppins-Regular",
                  fontSize: 19,
                  color: "#650000",
                },
              })}
            />
          </MainStack.Group>
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
