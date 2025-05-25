import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import words from "../assets/data/words.json";

export default function HomeScreen() {
  const router = useRouter();
  const categories: string[] = Object.keys(words);

  const DATA = categories.map((category) => ({
    id: category,
    title: category,
  }));
  const pickRandomBackgroundColor = () => {
    const colors = [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#FF33A1",
      "#FF8C33",
      "#33FFA1",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={true}
        data={DATA}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => (
          <Pressable
            key={item.id}
            onPress={() => router.push(`/category?category=${item.id}`)}
            style={{
              padding: 15,
              backgroundColor: pickRandomBackgroundColor(),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              marginVertical: 5,
              marginHorizontal: 5,
              shadowColor: "#000",
            }}
          >
            <Text style={styles.text}>{item.title}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View style={{height: 20}}/>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10, // Works in modern React Native versions
    overflowY: "scroll",
  },
  contentContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    padding: 15,
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    shadowColor: "#000",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
