import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TextInput,
} from "react-native";
import Button from "../../../../components/Button/Button";
import { SvgXml } from "react-native-svg";
import { leonInDonoughtIcon } from "../../../../images/svg/onboarding/leon-in-donought-svg";
import { calendarIcon } from "../../../../images/svg/form/calendarIcon-svg";
import { thumbUpIcon } from "../../../../images/svg/thumb-up-svg";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SucessRegistrationModal from "../../../../components/Modals/SuccessRegistration/SuccessRegistration";

const ChooseBirthday = ({ navigation }) => {
  const [date, setDate] = useState("");
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = useRef(null);

  const setModalShow = (visible) => {
    console.log("Modal visibility set to:", visible);
    setModalVisible(visible);
  };

  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // const showDatePicker = () => {
  //   Platform.OS === "ios" && setDatePickerVisibility(true);
  //   Platform.OS === "android" && openAndroidTimePicker();
  // };

  const onChangeDate = (text) => {
    const cleanedText = text.replace(/\D/g, "");

    const day = cleanedText.slice(0, 2);
    const month = cleanedText.slice(2, 4);
    const year = cleanedText.slice(4, 8);

    // Форматируем компоненты даты с учетом их длины
    let formattedText = "";

    if (day) {
      formattedText += day;
      if (day.length === 2 && month) formattedText += "/";
    }
    if (month) {
      formattedText += month;
      if (month.length === 2 && year) formattedText += "/";
    }
    if (year) formattedText += year;

    setDate(formattedText);
    setIsTextVisible(text === "");
  };

  useEffect(() => {
    !date && setIsTextVisible(true);
  }, [date]);

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
          <SvgXml style={styles.image} xml={leonInDonoughtIcon} />
          <SucessRegistrationModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
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
                keyboardType="number-pad"
              />
              <SvgXml style={styles.icon} xml={calendarIcon} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.btnWrapper}>
          <Button
            title="NEXT"
            onPressFunc={() => setModalShow(true)}
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
    color: "#650000",
    fontFamily: "Poppins-Medium",
    fontSize: 14,
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ChooseBirthday;
