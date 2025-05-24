import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { Button } from "react-native";
import words from "../assets/data/words.json";

export default function HomeScreen() {
  const router = useRouter();
  const categories: string[] = Object.keys(words);

  return (
    <ThemedView>
    {categories.map((category) => (
      <Button
        key={category}
        title={category}
        onPress={() => router.push(`/category?category=${category}`)}
      />
    ))}
    </ThemedView>
  );
}