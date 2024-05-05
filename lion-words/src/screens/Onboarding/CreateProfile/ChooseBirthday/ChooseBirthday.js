import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Button from "../../../../components/Button/Button";

import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ChooseBirthday = ({ navigation }) => {
  const [date, setDate] = useState("");
  const [isTextVisible, setIsTextVisible] = useState(true);
  const inputRef = useRef(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    Platform.OS === "ios" && setDatePickerVisibility(true);
    Platform.OS === "android" && openAndroidTimePicker();
  };

  const onChangeDate = (text) => {
    // Удаляем все нечисловые символы из введенной строки
    const cleanedText = text.replace(/\D/g, "");
    // Форматируем дату в нужный вид (DD/MM/YYYY)
    let formattedText = "";
    if (cleanedText.length > 0) {
      formattedText = cleanedText.slice(0, 2);
      if (cleanedText.length > 2) {
        formattedText += "/" + cleanedText.slice(2, 4);
        if (cleanedText.length > 4) {
          formattedText += "/" + cleanedText.slice(4, 8);
        }
      }
    }
    setDate(formattedText);
    setIsTextVisible(text === "");
  };
  const focusInput = () => {
    inputRef.current.focus();
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleTimeChange = (selectedTime) => {
    if (selectedTime !== undefined) {
      setTime(selectedTime);
    }
    Platform.OS === "ios" && hideDatePicker();
  };

  const openAndroidTimePicker = async () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      is24Hour: true,
      mode: "time",
      display: "clock",
      onChange: (e, value) => {
        handleTimeChange(value);
      },
      onError: (e) => {
        console.log(e);
      },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <Image
            style={styles.image}
            source={require("../../../../images/leon-in-donought.png")}
          />

          <TouchableWithoutFeedback onPress={focusInput}>
            <View style={styles.inputWrapper}>
              {isTextVisible && (
                <Text style={styles.placeholder}>25/08/2000</Text>
              )}
              <TextInput
                style={styles.input}
                onChangeText={onChangeDate}
                value={date}
                ref={inputRef}
              />
              <Image
                style={styles.icon}
                source={require("../../../../images/calendarIcon.png")}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.btnWrapper}>
          <Button
            title="NEXT"
            navigation={navigation}
            //   component={"CreateProfileWelcomeScreen"}
          />
          <Button
            title="SKIP"
            navigation={navigation}
            color={"white"}
            //   component={"CreateProfileWelcomeScreen"}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 44,
  },
  topWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 286,
    height: 286,
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
  },
  input: {
    height: 57,
    paddingLeft: 23,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
  },
  placeholder: {
    position: "absolute",
    left: 23,
    top: 19,
    color: "#9E9E9E",
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    zIndex: 1,
  },
  icon: {
    position: "absolute",
    top: 21,
    right: 15.54,
    width: 15.46,
    height: 16.67,
  },
  btnWrapper: {
    gap: 19,
  },
});

export default ChooseBirthday;
