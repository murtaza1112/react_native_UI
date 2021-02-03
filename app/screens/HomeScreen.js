import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";

export default function HomeScreen() {
  console.log(colors);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
      <View style={styles.midWrapper}>
        <View style={styles.leftButton} />
        <View style={styles.rightButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  midWrapper: {
    position: "absolute",
    top: "5%",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  leftButton: {
    backgroundColor: colors.primary,
    height: 45,
    width: 45,
  },
  rightButton: {
    backgroundColor: colors.secondary,
    height: 45,
    width: 45,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
