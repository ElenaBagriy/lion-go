import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
} from "react-native";
import Button from "../../../components/Button/Button";
// import Slider from "@react-native-community/slider";
import { Slider } from "@react-native-assets/slider";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SetRemindersScreen = ({ navigation }) => {
  const [time, setTime] = useState(new Date());
  const [sliderValue, setsliderValue] = useState(time.getHours());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  let value;

  const showDatePicker = () => {
    Platform.OS === "ios" && setDatePickerVisibility(true);
    Platform.OS === "android" && openAndroidTimePicker();
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

  useEffect(() => {
    setsliderValue(time.getHours());
  }, [time]);

  const setReminder = () => {
    // Здесь можете использовать выбранное время для установки напоминания
    console.log("Set reminder:", time);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Image
            style={styles.image}
            source={require("../../../images/remindLion.png")}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Create a new drawing habit.</Text>
            <Text style={styles.secondaryText}>
              Enable reminders for English practice.
            </Text>
          </View>

          <View style={styles.timeWrapper}>
            <TouchableOpacity
              onPress={showDatePicker}
              style={styles.timeButton}
            >
              <Text style={styles.timeText}>
                {time.toLocaleTimeString("en-CH", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </Text>
            </TouchableOpacity>
            {Platform.OS === "ios" && (
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                buttonTextColorIOS={"#650000"}
                date={time}
                mode="time"
                onConfirm={handleTimeChange}
                onCancel={hideDatePicker}
              />
            )}
            <Slider
              style={styles.slider}
              trackStyle={styles.trackStyle}
              thumbStyle={styles.thumbStyle}
              minimumValue={0}
              maximumValue={24}
              step={1}
              slideOnTap={true}
              onValueChange={(newValue) => {
                const newDate = new Date();
                newDate.setHours(newValue);
                setsliderValue(newValue);
                handleTimeChange(newDate);
              }}
              value={sliderValue}
            />
          </View>
        </View>
        <Button
          title="NEXT"
          navigation={navigation}
          onPressFunc={setReminder}
          component={"CreateProfileWelcomeScreen"}
        ></Button>
      </View>
    </TouchableWithoutFeedback>
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
    gap: 25,
  },
  image: {
    width: 183.24,
    height: 241,
  },
  textWrapper: {
    gap: 16,
  },
  title: {
    fontFamily: "Poppins-Medium",
    fontSize: 32,
    color: "#650000",
    textAlign: "center",
  },
  secondaryText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#650000",
    textAlign: "center",
  },
  timeWrapper: {
    width: "100%",
    gap: 25,
  },
  timeButton: {
    alignItems: "center",
  },

  timeText: {
    color: "#650000",
    fontSize: 40,
    fontFamily: "Poppins-Bold",
  },
  slider: {
    width: "80%",
    alignSelf: "center",
  },
  trackStyle: {
    backgroundColor: "#FFD57B",
    borderRadius: 25,
    height: 12,
  },
  thumbStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    borderColor: "#FFD57B",
    borderWidth: 1,
    height: 34,
    width: 34,
    ...Platform.select({
      ios: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    }),
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
});

export default SetRemindersScreen;
