import React from "react";
import {View,  Image, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import { Video, Audio } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;
const sounds = [<Video
    source={require("../../../assets/sounds/touch-lines.mp4")}
    shouldPlay={true}
    volume={0.1}
    useNativeControls ={false}/>, 
    <Video
    source={require("../../../assets/sounds/touch-circles.mp4")}
    shouldPlay={true}
    volume={0.1}
    useNativeControls ={false}/>,
    <Video
    source={require("../../../assets/sounds/yafeh-meod.mp4")}
    shouldPlay={true}
    volume={0.1}
    useNativeControls ={false}/>,
  ];

export default InstructionsSounds = ({index}) =>
{
      const sound = sounds[index]
            return (
                <View>
               {sound}
                </View>
              );
    }
    const styles = StyleSheet.create({
        line: {
            backgroundColor:"#9bf0ec",
            height: "15%",
            justifyContent: "center",
            width: "100%",
            bottom: "-2%",
            flexDirection: "row",
            zIndex: 1
        },
        number: {
              height: "100%",
              width: "100%",
              zIndex: 1
        },
        one: {
            height: "90%", 
            width: "75%", 
        },
        two: {
            height: "100%", 
            width: "95%", 
            zIndex: 1,
            transform: [{rotate: '2deg'}],
            marginTop: "5%",
            marginLeft: "10%"
        },
        three: {
            height: isMobile? "95%" : "140%", 
            width: isMobile? "100%" : "140%", 
            zIndex: 1,
            bottom: isMobile? 0 : "24%"
        },
        four: {
            height: "90%", 
            width: "100%", 
            zIndex: 1,
            marginTop: "10%"
        },
        five: {
            height: "100%", 
            width: "90%", 
            zIndex: 1
        },
        six: {
            height: "100%", 
            width: "100%", 
            zIndex: 1
        },
        seven: {
            height: "100%", 
            width: "100%", 
            zIndex: 1
        },
        eight: {
            height: "80%", 
            width: "100%", 
            zIndex: 1,
            top: "7%"
        },
        nine: {
            height: "100%", 
            width: "100%", 
            zIndex: 1,
            bottom: "7%"
        },
      });