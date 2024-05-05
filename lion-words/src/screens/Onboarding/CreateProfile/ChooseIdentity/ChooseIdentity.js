import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Button from "../../../../components/Button/Button";

const ChooseIdentity = ({ navigation }) => {
  const [gender, setGender] = useState("");

  const toggleCheckBox = (value) => {
    setGender(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <TouchableOpacity
          style={styles.checkBox}
          activeOpacity={0.4}
          onPress={() => {
            toggleCheckBox("male");
          }}
        >
          {gender === "male" && (
            <Image
              style={styles.icon}
              source={require("../../../../images/genderCheck.png")}
            />
          )}

          <Image
            style={styles.image}
            source={require("../../../../images/boy.png")}
          />
          <Text style={[styles.text, gender === "male" && styles.textChecked]}>
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkBox}
          activeOpacity={0.4}
          onPress={() => {
            toggleCheckBox("female");
          }}
        >
          {gender === "female" && (
            <Image
              style={styles.icon}
              source={require("../../../../images/genderCheck.png")}
            />
          )}
          <Image
            style={styles.image}
            source={require("../../../../images/girl.png")}
          />
          <Text
            style={[styles.text, gender === "female" && styles.textChecked]}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <Button
          title="NEXT"
          navigation={navigation}
          component={"ChooseBirthday"}
        />
        <Button
          title="SKIP"
          navigation={navigation}
          color={"white"}
          component={"ChooseBirthday"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingTop: 98,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 44,
  },
  mainContent: {
    alignItems: "center",
    width: "100%",
    gap: 80,
  },
  image: {
    width: 119,
    height: 119,
  },
  btnWrapper: {
    gap: 25,
  },
  checkBox: {
    position: "relative",
    gap: 9,
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: 19,
    color: "#650000",
  },
  icon: {
    position: "absolute",
    zIndex: 1,
    left: 45,
    top: -14,
    width: 29.75,
    height: 29.75,
  },
  textChecked: {
    fontFamily: "Poppins-Semibold",
    color: "#4FC123",
  },
});

export default ChooseIdentity;
