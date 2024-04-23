import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Animated, Easing, Text } from "react-native";

import Home from "../../screens/Home/Home";

const MainStack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={Home}>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
