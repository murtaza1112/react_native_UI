import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Platform,
  ImageBackground,
} from "react-native";


export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={[styles.container, styles.imageStyle]}
    >
      <View style={styles.midLogo}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logoStyle}
        />
        <Text>Sell What You Dont Need.</Text>
      </View>
      <TouchableOpacity style={styles.firstButton}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondButton}>
        <Text>REGISTER</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageStyle: {
    flex: 1,
    resizeMode: "cover",
  },
  midLogo: {
    position: "absolute",
    top: "10%",
    alignItems: "center",
    // justifyContent: "center",
  },
  logoStyle: {
    width: 100,
    height: 100,
  },
  buttonStyle: {
    marginVertical: 20,
    color: "red",
  },
  firstButton: {
    height: 65,
    width: "100%",
    backgroundColor: "#fc5c65",
    alignItems: "center",
    justifyContent: "center",
  },
  secondButton: {
    height: 65,
    width: "100%",
    backgroundColor: "#4ecdc4",
    alignItems: "center",
    justifyContent: "center",
  },
});
