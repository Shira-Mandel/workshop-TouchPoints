import React, {useState} from "react";
import { Dimensions, StyleSheet, View, ImageBackground } from "react-native";
import normalize from "react-native-normalize";
import Confetti from "../../animations/Confetti";
import Point from "../Point";
import { Video } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const isMobile = windowWidth <= 812 && true;
const rewardSounds = [<Video
  source={require("../../../assets/sounds/yofi.mp4")}
  shouldPlay={true}
  volume={0.1}
  useNativeControls ={false}/>, 
  <Video
  source={require("../../../assets/sounds/kol-hakavod.mp4")}
  shouldPlay={true}
  volume={0.1}
  useNativeControls ={false}/>,
  <Video
  source={require("../../../assets/sounds/yafeh-meod.mp4")}
  shouldPlay={true}
  isLooping={false}
  volume={0.1}
  useNativeControls ={false}/>,
  <Video
  source={require("../../../assets/sounds/metzuyan.mp4")}
  shouldPlay={true}
  isLooping={false}
  volume={0.1}
  useNativeControls ={false}/>
];

const MemoryLine = ({enableNext}) => {
  const [counter, setCounter] = useState(9);
  const [rewardState, setRewardState] = useState('rest');
  const sound = rewardSounds[Math.floor(Math.random() * 5)]

  return <View style={styles.mainContainer}>
      <Confetti rewardState={rewardState}/>
      {rewardState=='reward' ? sound : null}
      <Video
                source={require("../../../assets/sounds/line-mem-aid.mp4")}
                shouldPlay={true}
                isLooping={false}
                volume={0.1}
                useNativeControls ={false}/>
      <ImageBackground style={styles.bgimage1} source={rewardState == 'reward' ? require("../../../assets/LineSwing2.png") : require("../../../assets/LineSwing.png")} resizeMode="contain">
      <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => {
        if (enableNext != null) {
          enableNext();
        }
        setRewardState('reward')}} count={counter}/>
      <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => {
        if (enableNext != null) {
          enableNext();
        }
        setRewardState('reward')}} count={counter}/>
      <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => {
        if (enableNext != null) {
          enableNext();
        }
        setRewardState('reward')}} count={counter}/>
     </ImageBackground>
     <ImageBackground style={styles.bgimage2} source={rewardState == 'reward' ? require("../../../assets/LineSwing2.png") : require("../../../assets/LineSwing.png")} resizeMode="contain">
      <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => {
        if (enableNext != null) {
          enableNext();
        }
        setRewardState('reward')}} count={counter}/>
      <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => {
        if (enableNext != null) {
          enableNext();
        }
        setRewardState('reward')}} count={counter}/>
      <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => {
        if (enableNext != null) {
          enableNext();
        }
        setRewardState('reward')}} count={counter}/>
     </ImageBackground>
     <ImageBackground style={styles.bgimage3} source={rewardState == 'reward' ? require("../../../assets/LineSwing2.png") : require("../../../assets/LineSwing.png")} resizeMode="contain">
      <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => {
        if (enableNext != null) {
          enableNext();
        }
        setRewardState('reward')}} count={counter}/>
      <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => {
        if (enableNext != null) {
          enableNext();
        }
        setRewardState('reward')}} count={counter}/>
      <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => {
        if (enableNext != null) {
          enableNext();
        }
        setRewardState('reward')}} count={counter}/>
     </ImageBackground>
</View>
}

const styles = StyleSheet.create({
mainContainer: {
  width: '100%',
  flex:1,
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
left: isMobile ? '3%' : '3%',
top: isMobile ? '44%' : '41%',
aspectRatio: 1 / 1,
height: '15%',
},
button2: {
position: "absolute",
backgroundColor: "black",
borderRadius: normalize(35),
left: isMobile ? '27%' : '27%',
top: isMobile ? '44%' : '41%',
aspectRatio: 1 / 1,
height: '15%',
},
button3: {
position: "absolute",
backgroundColor: "black",
borderRadius: normalize(35),
left: isMobile ? '49%' : '49%',
top: isMobile ? '44%' : '41%',
aspectRatio: 1 / 1,
height: '15%',
}
});

export default MemoryLine;
