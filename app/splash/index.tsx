import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router?.navigate("/prelogin",);
    }, 500);
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Splash Screen Loading</Text>
      {/* <Button title="Go to Auth" onPress={() => router.push("/auth")} />
      <Button title="Go to Home" onPress={() => router.push("/home")} /> */}
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
