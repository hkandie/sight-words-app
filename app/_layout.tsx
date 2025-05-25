import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return <Text>{"loading"}</Text>;
  }

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        title: "Sight Words Learning",
        headerStyle: {
          backgroundColor: "#f8f8f8",
        },
        headerTintColor: "#333",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          fontFamily: "SpaceMono",
        },
        contentStyle: {
          padding: 20,
          backgroundColor: "#f8f8f8",
          flexDirection: "column",
          flex: 1
        },
      }}
    />
  );
}
