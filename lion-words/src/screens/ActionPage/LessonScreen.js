import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import { closeIcon } from "../../images/svg/closeIcon-svg";
import CorrectAnswer from "../../components/Modals/CorrectAnswer/CorrectAnswer";
import WrongAnswer from "../../components/Modals/WrongAnswer/WrongAnswer";

const { width } = Dimensions.get("window");

const LessonScreen = ({ route, navigation }) => {
  const { item, index } = route.params;

  const [currentWord, setCurrentWord] = useState({});
  const [options, setOptions] = useState([]);
  const [usedWords, setUsedWords] = useState([]);
  const [correctModalVisible, setCorrectModalVisible] = useState(false);
  const [wrongModalVisible, setWrongModalVisible] = useState(false);
  const [selected, setSelected] = useState();

  let total = item.words.length;
  let completed = usedWords.length;
  const progress = completed / total;

  useEffect(() => {
    selectRandomWord();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  // Функция выбора случайного слова и его перевода
  const selectRandomWord = () => {
    const availableWords = item.words.filter(
      (word) => !usedWords.includes(word.ukrainian)
    );

    if (availableWords.length === 0) {
      console.log("Урок завершен");
      return;
    }
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = availableWords[randomIndex];
    console.log(selectedWord);
    setCurrentWord(selectedWord);

    const correctTranslation = selectedWord.german;
    const incorrectTranslations = item.words
      .filter((word) => word.german !== correctTranslation)
      .map((word) => word.german);
    const randomIncorrectTranslations = incorrectTranslations
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const allOptions = [correctTranslation, ...randomIncorrectTranslations];
    setOptions(allOptions.sort(() => Math.random() - 0.5));
  };

  const checkAnswer = (selectedTranslation) => {
    if (selectedTranslation === currentWord.german) {
      setCorrectModalVisible(true);
      setUsedWords((prev) => [...prev, currentWord.ukrainian]);
    } else {
      setWrongModalVisible(true);
    }
  };

  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <SvgXml xml={closeIcon} />
          </TouchableOpacity>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { flex: progress }]} />
            <View style={[styles.remaining, { flex: 1 - progress }]} />
          </View>
        </View>
        <Text style={styles.title}>Choose the word</Text>
        <View style={styles.divider}></View>
        <View style={styles.questionWrapper}>
          <LinearGradient colors={["#F2C600", "#FFDA32"]} style={styles.icon} />
          <Text style={styles.question}>{currentWord.ukrainian}</Text>
        </View>

        <View style={styles.optionList}>
          {options.map((option, index) => (
            <TouchableOpacity
              style={[
                styles.option,
                selected === index && { borderColor: "#F2C600" },
              ]}
              key={index}
              onPress={() => {
                setSelected(index);
                checkAnswer(option);
              }}
            >
              <Text
                style={styles.optionText}
              >{`${option.article} ${option.word}`}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <CorrectAnswer
          modalVisible={correctModalVisible}
          setModalVisible={setCorrectModalVisible}
          onPressFunc={selectRandomWord}
          setSelected={setSelected}
        />
        {wrongModalVisible && (
          <WrongAnswer
            modalVisible={wrongModalVisible}
            setModalVisible={setWrongModalVisible}
            correctAnswer={`${currentWord?.german.article} ${currentWord?.german.word}`}
            setSelected={setSelected}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default LessonScreen;

const styles = StyleSheet.create({
  header: {
    paddingLeft: 31,
    paddingBottom: 23,
    paddingTop: 11,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: width / 2 - 31 - 13 - 161 / 2,
  },
  progressBar: {
    flexDirection: "row",
    height: 8,
    width: 161,
    borderRadius: 20,
    overflow: "hidden",
  },
  progress: {
    backgroundColor: "#F2C600",
  },
  remaining: {
    backgroundColor: "#ECECEC",
  },
  title: {
    alignSelf: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "#650000",
    marginBottom: 17,
  },
  divider: {
    width: 313,
    height: 2,
    backgroundColor: "#FBFBFB",
    borderRadius: 20,
    marginBottom: 29,
    alignSelf: "center",
  },
  questionWrapper: {
    paddingLeft: 31,
    gap: 11,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 48,
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 5,
  },
  question: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "#650000",
  },
  optionList: {
    paddingHorizontal: 51,
    gap: 15,
    height: "100%",
  },
  option: {
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderRadius: 9,
  },
  optionText: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "#650000",
  },
});
