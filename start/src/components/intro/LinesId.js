import React, {useState} from "react";
import { Dimensions, Text, StyleSheet, View} from "react-native";
import LineHorizontal from "./LineHorizontal";
import LineVertical from "./LineVertical";
import Confetti from "../../animations/Confetti";
import WrongCircle from "./WrongCircle";
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

const LinesId = ({enableNext}) => {
  const [counter, setCounter] = useState(3);
  const [rewardState, setRewardState] = useState('rest');
  const sound = rewardSounds[Math.floor(Math.random() * 5)]

    return <View style={{height: windowHeight, width: windowWidth, position: 'relative'}}>
          <Confetti rewardState={rewardState}/>
          {rewardState=='reward' ? sound : null}
          <Video
                source={require("../../../assets/sounds/touch-lines.mp4")}
                shouldPlay={counter==3}
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
           <WrongCircle style={styles.Circle1}/>
           <WrongCircle style={styles.Circle2}/>
            </View>
}

const styles = StyleSheet.create({
    LineHorizontal1: {
        position: "absolute",
        top: isMobile? "80%" : "85%",
        left: isMobile? "10%" : "10%",
        width: isMobile? "20%" : "20%",
       height: isMobile? "4%" : "4%",
      zIndex:1,
      },
      LineHorizontal2: {
        position: "absolute",
        top: isMobile? "10%" : "10%",
        left: isMobile? "60%" : "70%",
        width: isMobile? "20%" : "20%",
        height: isMobile? "4%" : "4%",
        zIndex:1,
      },
      LineHorizontal3: {
        position: "absolute",
        top: isMobile? "40%" : "45%",
        left: isMobile? "40%" : "20%",
         width: isMobile? "20%" : "20%",
        height: isMobile? "4%" : "4%",
        zIndex:1,
      },
      LineVertical1: {
        position: "absolute",
        top: isMobile? "7%" : "10%",
        left: isMobile? "50%" : "70%",
      },
      LineVertical2: {
        position: "absolute",
        top: isMobile? "15%" : "15%",
        left: isMobile? "5%" : "8%",
      },
      Circle1: {
        position: "absolute",
        top: "20%",
        left: "30%"
      },
      Circle2: {
        position: "absolute",
        top: "60%",
        left: "75%"
      },
});

export default LinesId;