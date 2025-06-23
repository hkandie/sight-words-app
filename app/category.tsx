import { useLocalSearchParams, useRouter } from "expo-router";
import * as Speech from "expo-speech";
import { useEffect, useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import words from "../assets/data/words.json";

type TypeKeyValue = keyof typeof words 

export default function SettingScreen() {
  const router = useRouter();
  const { category } = useLocalSearchParams();
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const categoryWords: string [] = words[category as TypeKeyValue] || [];
  const playSound = () => {
    if (!currentWord) return;
    Speech.speak(currentWord);
  };

  const nextWord = () => {
    const index = categoryWords.indexOf(currentWord as string);
    setCurrentWord(categoryWords[(index + 1) % categoryWords.length]);
  };

  useEffect(() => {
    if (category) {
      // Simulate fetching a word from the category
      setCurrentWord(categoryWords[0]);
    }
  }, [category]);

  if (!category) {
    return (
      <View>
        <Text>Please select a category</Text>
        <Button title="Go to Home" onPress={() => router.push("/")} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Button title="🔊 Play Sound" onPress={playSound} color={"#55c2da"} />
        <Button title="➡️ Next Word" onPress={nextWord} color={"#80669d"} />
      </View>
      <ScrollView style={styles.content}>
        <Text
          style={{
            flex: 1,
            fontSize: 80,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
            color: "#330066",
            fontFamily: "Comic Sans MS",
            wordWrap: "break-word", // This will break the word if it's too long
          }}
          adjustsFontSizeToFit
        >
          {currentWord}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CCCCCC",
    borderRadius: 10,
  },
  content: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ecf0f1",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
  },
});
