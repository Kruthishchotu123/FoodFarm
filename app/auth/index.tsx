import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Auth() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Auth Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => router.push("/auth/details")}
      />
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
