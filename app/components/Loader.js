import React from "react";
import { StyleSheet, View } from "react-native";
import { windowHeight } from "../Utils/Dimesions";

export default function Loader({ children = "Loading" }) {
  return (
    <View style={styles.loadingContainer}>
      {/* <AnimatedLottieView
            autoPlay
            style={{
              width: 60,
              height: 60,
              backgroundColor: 'inherit'
            }}
            source={require('../../../assets/Animations/color_loader.json')}
          />
          <Text style={{ fontSize: 18, marginTop: 10, color: '#000' }}>
            {children}
          </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: "white",
    height: windowHeight - 230,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
});
