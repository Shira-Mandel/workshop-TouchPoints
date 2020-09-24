
import React, {useState} from "react";
import { Dimensions ,TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RewardsComponent from 'react-native-rewards';
import normalize from "react-native-normalize";
import { render } from "react-dom";
import { color } from "react-native-reanimated";
import LineHorizontal from "./LineHorizontal";
import LineVertical from "./LineVertical";
import Circle from "./Circle";
import Confetti from "../../animations/Confetti";
import Point from "../Point";

const windowWidth = Dimensions.get('window').width;
const isMobile = windowWidth <= 812 && true;

const MemoryLine = () => {
  const [counter, setCounter] = useState(9);
  const [rewardState, setRewardState] = useState('rest');


  return <View style={styles.mainContainer}>
      <Confetti rewardState={rewardState}/>
      <ImageBackground style={styles.bgimage1} source={rewardState == 'reward' ? require("../../../assets/LineSwing2.png") : require("../../../assets/LineSwing.png")} resizeMode="contain">
      <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
      <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
      <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
     </ImageBackground>
     <ImageBackground style={styles.bgimage2} source={rewardState == 'reward' ? require("../../../assets/LineSwing2.png") : require("../../../assets/LineSwing.png")} resizeMode="contain">
      <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
      <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
      <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
     </ImageBackground>
     <ImageBackground style={styles.bgimage3} source={rewardState == 'reward' ? require("../../../assets/LineSwing2.png") : require("../../../assets/LineSwing.png")} resizeMode="contain">
      <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
      <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
      <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
     </ImageBackground>
</View>
}

const styles = StyleSheet.create({
mainContainer: {
  width: '100%',
  flex:1,
  borderWidth:10,
},
bgimage1: {
  position: "absolute",
  marginTop: isMobile ? '2%' : '6%',
  borderRadius: 20,
  height: isMobile? "70%" : "70%",
  width:  isMobile? "60%" : "60%",
  top:isMobile? "3%": "3%",
  left:isMobile?"10%":"10%",
  shadowColor: "#36393d",
  shadowOffset: { width: 1 },
  shadowRadius: 5,
  shadowOpacity: 1,
  direction: 'ltr',
},
bgimage2: {
  position: "absolute",
  marginTop: isMobile ? '2%' : '6%',
  borderRadius: 20,
  height: isMobile? "70%" : "70%",
  width:  isMobile? "60%" : "60%",
  top:isMobile? "0%": "0%",
  left:isMobile?"60%":"60%",
  shadowColor: "#36393d",
  shadowOffset: { width: 1 },
  shadowRadius: 5,
  shadowOpacity: 1,
  direction: 'ltr',
},
bgimage3: {
  position: "absolute",
  marginTop: isMobile ? '2%' : '6%',
  borderRadius: 20,
  height: isMobile? "70%" : "70%",
  width:  isMobile? "60%" : "60%",
  top:isMobile? "40%": "40%",
  left:isMobile?"50%":"50%",
  shadowColor: "#36393d",
  shadowOffset: { width: 1 },
  shadowRadius: 5,
  shadowOpacity: 1,
  direction: 'ltr',
},
button1: {
position: "absolute",
backgroundColor: "black",
borderRadius: normalize(35),
left: isMobile ? '4%' : '3%',
top: isMobile ? '44%' : '41%',
width: isMobile ? 31 : 50,
height: isMobile ? 31 : 50,
},
button2: {
position: "absolute",
backgroundColor: "black",
borderRadius: normalize(35),
left: isMobile ? '27%' : '27%',
top: isMobile ? '44%' : '41%',
width: isMobile ? 31 : 50,
height: isMobile ? 31 : 50,
},
button3: {
position: "absolute",
backgroundColor: "black",
borderRadius: normalize(35),
left: isMobile ? '50%' : '49%',
top: isMobile ? '44%' : '41%',
width: isMobile ? 31 : 50,
height: isMobile ? 31 : 50,
}
});

export default MemoryLine;
