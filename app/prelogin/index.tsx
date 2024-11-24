import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function PreLogin() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PreLogin Screen</Text>
      <Button title="Create a Account" onPress={() => router.push("/auth")} />
      <Button title="Login to Account" onPress={() => router.push("/auth")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
