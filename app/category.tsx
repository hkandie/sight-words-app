import { useLocalSearchParams, useRouter } from "expo-router";
import * as Speech from "expo-speech";
import { useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import words from "../assets/data/words.json";

export default function SettingScreen() {
  const router = useRouter();
  const { category } = useLocalSearchParams();
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const { width } = Dimensions.get("window");
  const categoryWords = words[category] || [];
  const playSound = () => {
    Speech.speak(currentWord);
  };

  const nextWord = () => {
    const index = categoryWords.indexOf(currentWord);
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
      <View style={styles.content}>
        <Text
          style={{
            fontSize: 100,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
            color: "#330066",
            fontFamily: "Comic Sans MS",
            width: width - 40, // Adjust the width to fit the screen
            wordWrap: "break-word", // This will break the word if it's too long
          }}
          adjustsFontSizeToFit
        >
          {currentWord}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#CCCCCC",
  },
  content: {
    borderRadius: 10,
    backgroundColor: "#ecf0f1",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20, // Optional: Add margin at the bottom
    padding: 10,
  },
});
