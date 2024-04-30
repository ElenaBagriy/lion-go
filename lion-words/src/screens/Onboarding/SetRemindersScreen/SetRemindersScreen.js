import React, { useState } from "react";
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
import Slider from "@react-native-community/slider";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const SetRemindersScreen = ({ navigation }) => {
  const [time, setTime] = useState(new Date());
  //   const [showPicker, setShowPicker] = useState(Platform.OS === "ios");

  //   const togglePicker = () => {
  //     setShowPicker(!showPicker);
  //   };

  const handleSliderTimeChange = (selectedTime) => {
    if (selectedTime !== undefined) {
      setTime(selectedTime);
    }
    // Platform.OS !== "ios" && setShowPicker(false);
  };

  const handlePickerTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setTime(selectedTime);
    }
  };

  const openAndroidTimePicker = async () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      is24Hour: true,
      mode: "time",
      display: "clock",
      onChange: (e, value) => {
        setTime(value);
      },
      onError: (e) => {
        console.log(e);
      },
    });
  };

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
            {Platform.OS === "android" && (
              <TouchableOpacity onPress={openAndroidTimePicker}>
                <Text>
                  {time.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </Text>
              </TouchableOpacity>
            )}
            {Platform.OS === "ios" && (
              <DateTimePicker
                value={time}
                mode="time"
                is24Hour={true}
                display={Platform.OS === "ios" ? "default" : "default"}
                minuteInterval={5}
                onChange={handlePickerTimeChange}
              />
            )}
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={24}
              step={0.5}
              value={time.getHours()}
              onValueChange={(newValue) => {
                const newDate = new Date();
                newDate.setHours(newValue);
                handleSliderTimeChange(newDate);
              }}
            />
          </View>
        </View>
        <Button
          title="NEXT"
          navigation={navigation}
          // component={"sdsd"}
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
  },
  slider: {
    width: "80%",
    alignSelf: "center",
  },
});

export default SetRemindersScreen;
