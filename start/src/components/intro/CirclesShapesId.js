import React, {useState} from "react";
import { Dimensions, StyleSheet, View, ImageBackground} from "react-native";
import Circle from "./Circle";
import Confetti from "../../animations/Confetti";
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

const CirclesShapesId = ({enableNext}) => {
  const [counter, setCounter] = useState(3);
  const [rewardState, setRewardState] = useState('rest');
  const sound = rewardSounds[Math.floor(Math.random() * 5)]

  return <View style={styles.mainContainer}>
           <Confetti rewardState={rewardState}/>
          {rewardState=='reward' ? sound : null}
           <Video
                source={require("../../../assets/sounds/touch-circles.mp4")}
                shouldPlay={counter==3}
                isLooping={false}
                volume={0.1}
                useNativeControls ={false}/>
           <ImageBackground style={styles.bgimagebicycle} source={rewardState == 'reward' ? require("../../../assets/bicycle.png") : require("../../../assets/bicycle.png")} resizeMode="contain">
           <Circle  rewardState={rewardState} style={styles.Circle1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
           <Circle  rewardState={rewardState} style={styles.Circle2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
          </ImageBackground> 
          <ImageBackground style={styles.bgimagesun} source={rewardState == 'reward' ? require("../../../assets/sun.png") : require("../../../assets/sun.png")} resizeMode="contain">
           <Circle  rewardState={rewardState} style={styles.Circle3} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
          </ImageBackground> 
            </View>
}

const styles = StyleSheet.create({
mainContainer: {
  width: '100%',
  flex: 1,
},
bgimagebicycle: {
  position:"absolute",
  borderRadius: 20,
  height: isMobile? "75%": "75%",
  aspectRatio: 1/1,
  left: isMobile ? '5%' : '0%',
  top: isMobile ? "20%" : '30%',
  direction: 'ltr',
},
bgimagesun: {
  position:"absolute",
  borderRadius: 20,
  height:  isMobile? "90%": "90%",
  aspectRatio: 1/1,
  left: isMobile ? '50%' : '40%',
  top: isMobile ? "20%" : '0%',
  direction: 'ltr',
},
Circle1: {
  position: "absolute",
  width: isMobile? "100%" : "100%",
  top: isMobile? "39%" : "40.5%",
  left: isMobile? "5%" : "7.2%",
},
Circle2: {
  position: "absolute",
  width: isMobile? "100%" : "100%",
  top: isMobile? "40%" : "42%",
  left: isMobile? "58%" : "60%",
},
Circle3: {
  position: "absolute",
  width: isMobile? "100%" : "100%",
  top: isMobile? "30%" : "31%",
  left: isMobile? "37%" : "37.5%",
},
});

export default CirclesShapesId;