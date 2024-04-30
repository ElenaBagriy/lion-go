import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Button from "../../../components/Button/Button";
import LanguagePicker from "../../../components/LanguagePicker/LanguagePicker";
import { sources } from "../../../data/sourcesOfInfo";

const ChooseSourceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>How did you know about LionGo ?</Text>
          <Image
            style={styles.image}
            source={require("../../../images/standingLion.png")}
          />
        </View>
        <LanguagePicker data={sources} />
      </View>
      <Button
        title="NEXT"
        navigation={navigation}
        component={"ChooseReasonsScreen"}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 37,
    paddingTop: 27,
  },
  mainContent: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  headerWrapper: {
    position: "relative",
    width: 189,
    marginBottom: 20,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: "#650000",
    textAlign: "center",
  },
  image: {
    position: "absolute",
    left: -49.98,
    bottom: 8.36,
    width: 42.62,
    height: 66.64,
  },
  input: {
    paddingVertical: 16,
    paddingLeft: 19,
    marginVertical: 25,
    borderWidth: 1,
    borderColor: "#EEDDEE",
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    width: "100%",
  },
  selectField: {
    paddingLeft: 84,
    position: "relative",
    width: "100%",
    justifyContent: "center",
    height: 60,
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: 15,
  },
  selectText: {
    justifyContent: "center",
    color: "#650000",
    fontFamily: "Poppins-Light",
    fontSize: 14,
  },
  flag: {
    position: "absolute",
    left: 18,
    top: 17,
  },
});

export default ChooseSourceScreen;
