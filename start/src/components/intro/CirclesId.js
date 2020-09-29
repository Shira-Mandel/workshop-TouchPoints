import React, {useState} from "react";
import { Dimensions, StyleSheet, View} from "react-native";
import LineVertical from "./LineVertical";
import Circle from "./Circle";
import Confetti from "../../animations/Confetti";
import WrongLineHorizontal from "./WrongLineHorizontal";
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

const CirclesId = ({enableNext}) => {
  const [counter, setCounter] = useState(2);
  const [rewardState, setRewardState] = useState('rest');
  const sound = rewardSounds[Math.floor(Math.random() * 5)]

  return <View style={{height: windowHeight, width: windowWidth, position: 'relative'}}>
  <Confetti rewardState={rewardState}/>
  {rewardState=='reward' ? sound : null}
  <Video
                source={require("../../../assets/sounds/touch-circles.mp4")}
                shouldPlay={true}
                isLooping={false}
                volume={0.1}
                useNativeControls ={false}/>
   <WrongLineHorizontal style={styles.LineHorizontal1}/>
   <WrongLineHorizontal style={styles.LineHorizontal2}/>
   <WrongLineHorizontal style={styles.LineHorizontal3}/>
   <LineVertical style={styles.LineVertical1}/>
   <LineVertical style={styles.LineVertical2}/>
   <Circle rewardState={rewardState} style={styles.Circle1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
     if (enableNext != null) {
      enableNext();
    }
     setRewardState('reward')}} flag = {true}/>
   <Circle style={styles.Circle2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
     if (enableNext != null) {
      enableNext();
    }
     setRewardState('reward')}} flag = {true}/>
    </View>
}

const styles = StyleSheet.create({
LineHorizontal1: {
position: "absolute",
top: isMobile? "60%" : "70%",
left: isMobile? "10%" : "10%"
},
LineHorizontal2: {
position: "absolute",
top: isMobile? "7%" : "10%",
left: isMobile? "50%" : "50%",
},
LineHorizontal3: {
position: "absolute",
top: isMobile? "40%" : "40%",
left: isMobile? "40%" : "40%"
},
LineVertical1: {
position: "absolute",
top: isMobile? "10%" : "10%",
left: isMobile? "30%" : "30%",
},
LineVertical2: {
position: "absolute",
top: isMobile? "50%" : "50%",
left: isMobile? "80%" : "80%",
},
Circle1: {
position: "absolute",
top: isMobile? "30%" : "30%",
left: isMobile? "5%" : "8%",
},
Circle2: {
position: "absolute",
top: isMobile? "2%" : "10%",
left: isMobile? "70%" : "80%",
},
});

export default CirclesId;