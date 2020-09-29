import React, {useState} from "react";
import { Dimensions, StyleSheet, View, ImageBackground} from "react-native";
import LineHorizontal from "./LineHorizontal";
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

const LinesShapesId = ({enableNext}) => {
  const [counter, setCounter] = useState(5);
  const [rewardState, setRewardState] = useState('rest');
  const sound = rewardSounds[Math.floor(Math.random() * 5)]

  return <View style={styles.mainContainer}>
           <Confetti rewardState={rewardState}/>
          {rewardState=='reward' ? sound : null}
           <Video
                source={require("../../../assets/sounds/touch-lines.mp4")}
                shouldPlay={true}
                isLooping={false}
                volume={0.1}
                useNativeControls ={false}/>
           <ImageBackground style={styles.bgimagewindow} source={require("../../../assets/window.png")} resizeMode="contain">
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
           </ImageBackground> 
           
           <ImageBackground style={styles.bgimagehouse} source={ require("../../../assets/house.png")} resizeMode="contain">
           <LineHorizontal style={styles.LineHorizontal4} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal5} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
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
  position: 'relative'
},
bgimagewindow: {
  position: "absolute",
  marginTop: isMobile ? '2%' : '6%',
  borderRadius: 20,
  left: isMobile ? '50%' : '40%',
  top: isMobile ? "0%" : '-7%',
  aspectRatio: 1/1,
  direction:'ltr',
  height: isMobile ?'100%' : '100%',
},
bgimagehouse: {
  position: "absolute",
  marginTop: isMobile ? '2%' : '6%',
  borderRadius: 20,
  left: isMobile ? '12%' : '0%',
  top: isMobile ? "9%" : '0%',
  aspectRatio: 1/1,
  height: isMobile ? '85%' : '85%',
  direction: 'ltr',
},
LineHorizontal1: {
  position: "absolute",
  width: isMobile? "31%" : "30%",
  height: isMobile? "2%" : "2%",
  top: isMobile? "25%" : "25%",
  left: isMobile? "30%" : "30%",
  zIndex:1,
},
LineHorizontal2: {
  position: "absolute",
  width: isMobile? "31%" : "30%",
  height: isMobile? "2%" : "2%",
  top: isMobile? "49%" : "49%",
  left: isMobile? "30%" : "30%",
  zIndex:1,
},
LineHorizontal3: {
  position: "absolute",
  width: isMobile? "31%" : "30%",
  height: isMobile? "2%" : "2%",
  top: isMobile? "74%" : "72%",
  left: isMobile? "30%" : "30%",
  zIndex:1,
},
LineHorizontal4: {
  position: "absolute",
  width: isMobile? "41%" : "41%",
  height: isMobile? "2%" : "2%",
  top: isMobile? "77%" : "77%",
  left: isMobile? "27%" : "27%",
  zIndex:1,
},
LineHorizontal5: {
  position: "absolute",
  width: isMobile? "41%" : "41%",
  height: isMobile? "2%" : "2%",
  top: isMobile? "39%" : "39%",
  left: isMobile? "27%" : "27%",
  zIndex:1,
},
});

export default LinesShapesId;