import { StatusBar } from "expo-status-bar";
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

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";

// use view for seeeing stuff
// use safeViewArea for viewing safely like in case on notch
// use require to load static images , no need to specify dimensions as read from the metadata
// for calling images from API define height and width
// different types of touchable methods
// use alert for customized pop ups
// for styling can add a custom object or using StyleSheet
// advantage of using stylesheet is it throws error on speelling mistakes in ur properties
// use platform.OS to detect wither android or ios
// the deminsion values used are DIPS(density indepndent pixels)
// actual pixels = DIPS*scale factor
// so using raw values may not help if u want a specific portion of the scteen to get impacted across all devices , use percentage instead(string value)
// use Dimension API to get dimensions of the screen(wont change with orientation)
// use useDimension hook to get dimension irrespective of orientation(will cahnge with orientation)
// use DeviceOrientation hook to get dimension of hook
// using flexbox with native is similair to css flexbox
// define flex:1 takes full available screen
// default directoin is column
// three types of spaces
// space-around : same space only between elements , and equal in remaining(edges,may not be equal to in between)
// space-evenly : same space only between elements ,and edges
// space-between : same space only between elements , 0 space at edge
// when flex direction is row primary axis is x-axis and secondary axis is y-axis
// when flex direction is column primary axis is y-axis and secondary axis is x-axis
// use justifycontent for alignment along primary axis
// use align-items for alignment along secondary axis
// baseline : all elements have same base
// stretch(default) : if no dimension specifies will take all avalible spave in each dimension
// flex-start,flex-end
// center : centeralize
// also use alignSelf to apply on an indvisual child to change its aligment from the parents
// when overflow occurs in flexbox , one or more item wil get shrunk to accomodate incoming item
// to avoid shrinking use flexWrap : 'wrap'
// but vertical alignment might get screwed
// alignItems aligns accordingly in EACH LINE
// use alignContent to align vertically everything in parent vertically center
// also alignContent has no effect without wrap
// flex basis : assigns dimension along primary axis i.e width in row , height in column
// flex grow : letting native now to shrink this if needed , same as assigning positive value of flex , ex -flex:-1
// flex shrink : letting native now to shrink this if needed , same as assigning negatibe value of flex , ex -flex:-1
// relative position are default , use top,bottom,left,right . Adjacent objects will NOT be affected
// absolute position , adjacent elemtns WILL BE AFFECTED

// export default function App() {
//   const dimensions = useDimensions().screen;
//   const orientation = useDeviceOrientation();
//   console.log(dimensions, orientation);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={[styles.buttonStyle,textStyle]}>hello</Text>
//       <Button
//         title="Hello"
//         onPress={() => {
//           Alert.alert("How Are You?", "Plese give an answer.", [
//             { text: "Yes", onPress: () => console.log("Hello") },
//             { text: "No", onPress: () => console.log("My Name") },
//             { text: "No", onPress: () => console.log("My Name") },
//           ]);
//         }}
//       />
//       <Button
//         title="Hello"
//         style={styles.buttonStyle}
//         onPress={() => {
//           if(Platform.OS === 'android'){
//             console.log("adroid")
//           }else{
//             console.log("nor android")
//           }
//           Alert.alert("How Are You?", "Plese give an answer.", [
//             { text: "Yes", onPress: () => console.log("Hello") },
//             { text: "No", onPress: () => console.log("My Name") },
//             { text: "No", onPress: () => console.log("My Name") },
//           ]);
//         }}
//       /> */}
//       <Image source={require("./assets/favicon.png")} />
//       <TouchableOpacity onPress={() => console.log("opacity")}>
//         <Image
//           source={{
//             height: 300,
//             width: 200,
//             uri: "https://picsum.photos/200/300",
//           }}
//         />
//       </TouchableOpacity>
//       <TouchableWithoutFeedback
//         onPress={() => console.log("WoTouchableWithoutFeedback")}
//       >
//         <Image
//           source={{
//             height: 300,
//             width: 200,
//             uri: "https://picsum.photos/200/300",
//           }}
//         />
//       </TouchableWithoutFeedback>
//       <TouchableHighlight onPress={() => console.log("WoTouchableHighlight")}>
//         <Image
//           source={{
//             height: 300,
//             width: 200,
//             uri: "https://picsum.photos/200/300",
//           }}
//         />
//       </TouchableHighlight>
//        <View
//         style={{
//           flex: 1,
//           backgroundColor: "red",
//           width: "100%",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "flex-start",
//           flexWrap: "wrap",
//           alignContent: "center",
//         }}
//       >
//         <View
//           style={{
//             backgroundColor: "blue",

//             height: 100,
//             width: 300,
//           }}
//         />
//         <View
//           style={{
//             backgroundColor: "pink",

//             height: 200,
//             width: 100,
//           }}
//         />
//         <View
//           style={{
//             backgroundColor: "gold",
//             height: 100,
//             width: 100,
//           }}
//         />
//         <View
//           style={{
//             backgroundColor: "greenyellow",
//             height: 100,
//             width: 200,
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const textStyle = {
//   color: "blue",
//   marginRight: 20,
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonStyle: {
//     marginVertical: 20,
//     color: "red",
//   },
// });

export default function App() {
  return (
    // <WelcomeScreen />
    <HomeScreen />
  );
}
const styles = StyleSheet.create({});
