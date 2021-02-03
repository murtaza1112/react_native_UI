import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <View styles={styles.midWrapper}>
          <View title={styles.leftButton} />
          <View title={styles.rightButton} />
        </View>
        <Image source={require("../assets/chair.jpg")} style={styles.image} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width : '100%',
    height: '100%'
  },
  midWrapper:{
    position : 'absolute',
    top : '3%',
    width: '100%',
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-around'
  },
  leftButton: {
    backgroundColor: "#fc5c65",
    height: 40,
    width: 40,
  },
});
