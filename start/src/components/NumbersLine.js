import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import OptionDigit from "./OptionDigit";
import { Video } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;
const rewardSounds = [<Video
    source={require("../../assets/sounds/yofi.mp4")}
    shouldPlay={true}
    volume={0.1}
    useNativeControls ={false}/>, 
    <Video
    source={require("../../assets/sounds/kol-hakavod.mp4")}
    shouldPlay={true}
    volume={0.1}
    useNativeControls ={false}/>,
    <Video
    source={require("../../assets/sounds/yafeh-meod.mp4")}
    shouldPlay={true}
    isLooping={false}
    volume={0.1}
    useNativeControls ={false}/>,
    <Video
    source={require("../../assets/sounds/metzuyan.mp4")}
    shouldPlay={true}
    isLooping={false}
    volume={0.1}
    useNativeControls ={false}/>
  ];

export default NumbersLine = ({rewardState, result, setRewardState}) =>
{
      const sound = rewardSounds[Math.floor(Math.random() * 5)]
            return (
                <View style={styles.line}>
                    {rewardState=='reward' ? sound : null}
                    <OptionDigit style={styles.one} source={require("../../assets/number1.png")} value="1" result={result} setRewardState={() => setRewardState()}/>
                    <OptionDigit style={styles.two} source={require("../../assets/number2.png")} value="2" result={result} setRewardState={() => setRewardState()}/>
                    <OptionDigit style={styles.three} source={require("../../assets/number3.png")} value="3" result={result} setRewardState={() => setRewardState()}/>
                    <OptionDigit style={styles.four} source={require("../../assets/number4.png")} value="4" result={result} setRewardState={() => setRewardState()}/>
                    <OptionDigit style={styles.five} source={require("../../assets/number5.png")} value="5" result={result} setRewardState={() => setRewardState()}/>
                    <OptionDigit style={styles.six} source={require("../../assets/number6.png")} value="6" result={result} setRewardState={() => setRewardState()}/>
                    <OptionDigit style={styles.seven} source={require("../../assets/number7.png")} value="7" result={result} setRewardState={() => setRewardState()}/>
                    <OptionDigit style={styles.eight} source={require("../../assets/number8.png")} value="8" result={result} setRewardState={() => setRewardState()}/>
                    <OptionDigit style={styles.nine} source={require("../../assets/number9.png")} value="9" result={result} setRewardState={() => setRewardState()}/>
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