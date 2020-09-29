import React, {useState} from "react";
import {Dimensions, StyleSheet, View } from "react-native";
import LineHorizontal from "./LineHorizontal";
import LineVertical from "./LineVertical";
import Circle from "./Circle";
import Confetti from "../../animations/Confetti";
import { Video } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
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

const LinesAndCirclesId = ({enableNext}) => {
  const [counter, setCounter] = useState(5);
  const [rewardState, setRewardState] = useState('rest');
  const sound = rewardSounds[Math.floor(Math.random() * 5)]

  return <View style={{alignItems: 'center', display: 'flex',height: '100%', width: '100%', position: 'relative'}}>
          <Confetti rewardState={rewardState}/>
          {rewardState=='reward' ? sound : null}
          <Video
                source={require("../../../assets/sounds/touch-lines-circles.mp4")}
                shouldPlay={true}
                isLooping={false}
                volume={0.1}
                useNativeControls ={false}/>
           <LineHorizontal style={styles.LineHorizontal1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal3} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
           <LineVertical style={styles.LineVertical1}/>
           <LineVertical style={styles.LineVertical2}/>
           <Circle rewardState={rewardState} style={styles.Circle1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
           <Circle rewardState={rewardState} style={styles.Circle2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
          </View>
}

const styles = StyleSheet.create({
    LineHorizontal1: {
    position: "absolute",
    top: isMobile? "15%" : "30%",
    left: isMobile? "5%" : "8%",
    width: isMobile? "20%" : "20%",
   height: isMobile? "4%" : "3%",
    zIndex:1,
    },
    LineHorizontal2: {
    position: "absolute",
    top: isMobile? "2%" : "10%",
    left: isMobile? "70%" : "60%", 
    width: isMobile? "20%" : "20%",
    height: isMobile? "4%" : "3%",
    zIndex:1,
    },
    LineHorizontal3: {
    position: "absolute",
    top: isMobile? "40%" : "40%",
    left: isMobile? "40%" : "50%",
    width: isMobile? "20%" : "20%",
    height: isMobile? "4%" : "3%",
     zIndex:1,  
  },
    LineVertical1: {
    position: "absolute",
    top: isMobile? "10%" : "30%",
    left: isMobile? "30%" : "8%",
    },
    LineVertical2: {
    position: "absolute",
    top: isMobile? "50%" : "50%",
    left: isMobile? "80%" : "80%",
    },
    Circle1: {
    position: "absolute",
    top: isMobile? "60%" : "70%",
    left: isMobile? "10%" : "20%",
    },
    Circle2: {
    position: "absolute",
    top: isMobile? "7%" : "10%",
    left: isMobile? "50%" : "70%",
    },
    });

export default LinesAndCirclesId;