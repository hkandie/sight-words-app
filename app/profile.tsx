import { useRouter } from "expo-router";
import { Button } from "react-native";

export default function ProfileScreen() {
    const router = useRouter();

  return (
    <Button title="Go to Home" onPress={() => router.push("/")} />
  );
}