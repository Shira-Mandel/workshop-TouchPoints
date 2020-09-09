import React, {useState} from "react";
import { Dimensions,TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RewardsComponent from 'react-native-rewards';
import normalize from "react-native-normalize";
import { render } from "react-dom";
import { color } from "react-native-reanimated";
import LineHorizontal from "./LineHorizontal";
import LineVertical from "./LineVertical";
import Circle from "./Circle";
import Confetti from "../../animations/Confetti";


const windowWidth = Dimensions.get('window').width;
const isMobile = windowWidth <= 812 && true;

const CirclesShapesId = () => {
  const [counter, setCounter] = useState(3);
  const [rewardState, setRewardState] = useState('rest');

  return <View style={styles.mainContainer}>
           <Confetti rewardState={rewardState}/>
           <Text style = {styles.Text}>מצאו את העיגולים </Text>
           <ImageBackground style={styles.bgimagebicycle} source={rewardState == 'reward' ? require("../../../assets/bicycle.png") : require("../../../assets/bicycle.png")} resizeMode="contain">
           <Circle style={styles.Circle1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <Circle style={styles.Circle2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
          </ImageBackground> 
          <ImageBackground style={styles.bgimagesun} source={rewardState == 'reward' ? require("../../../assets/sun.png") : require("../../../assets/sun.png")} resizeMode="contain">
           <Circle style={styles.Circle3} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
          </ImageBackground> 
            </View>
}

const styles = StyleSheet.create({
  Text: {
    fontSize:15,
    color: "#002266", 
  //position: "absolute",
  fontWeight: 'bold',
  left: isMobile ? '35%' : '6%',
  top: isMobile ? "10%" : '18%',
  position: "absolute",

},
mainContainer: {
  width: '100%',
  //display: 'flex',
  flex: 1,
  //justifyContent: 'center',
  //alignItems: 'center',
  borderWidth: 10
 // {alignItems: 'center', display: 'flex',height: '100%', width: '100%', position: 'relative'}
},
bgimagebicycle: {
 position:"absolute",
  borderRadius: 20,
  height: "75%",
  aspectRatio: 1/1,
  left: isMobile ? '5%' : '6%',
  top: isMobile ? "20%" : '18%',
  direction: 'ltr',
},
bgimagesun: {
 position:"absolute",
  borderRadius: 20,
  height: "90%",
  aspectRatio: 1/1,
  left: isMobile ? '50%' : '6%',
  top: isMobile ? "20%" : '18%',
  direction: 'ltr',
},
LineHorizontal1: {
  position: "absolute",
  height: isMobile? 1 : "10%",
  width: isMobile? "18%" : "10%",
  top: isMobile? "0%" : "70%",
  left: isMobile? "39%" : "20%"
},
LineHorizontal2: {
  position: "absolute",
  //height: 100,
  width: isMobile? "18%" : "10%",
  top: isMobile? "24%" : "10%",
  left: isMobile? "39%" : "80%",
},
LineHorizontal3: {
  position: "absolute",
  width: isMobile? "17%" : "10%",
 // height: 100,
  top: isMobile? "50%" : "40%",
  left: isMobile? "39%" : "50%"
},
LineHorizontal4: {
  position: "absolute",
  //height: 100,
  width: isMobile? "16%" : "10%",
  top: isMobile? "7%" : "10%",
  left: isMobile? "41%" : "80%",
},
LineHorizontal5: {
  position: "absolute",
  width: isMobile? "16%" : "10%",
 // height: 100,
  top: isMobile? "40%" : "40%",
  left: isMobile? "41%" : "50%"

},
Circle1: {
  position: "absolute",
  //height: 100,
  width: isMobile? "100%" : "10%",
  top: isMobile? "39%" : "10%",
  left: isMobile? "5%" : "80%",
 

},
Circle2: {
  position: "absolute",
  //height: 100,
  width: isMobile? "100%" : "10%",
  top: isMobile? "40%" : "10%",
  left: isMobile? "58%" : "80%",
},
Circle3: {
  position: "absolute",
  //height: 100,
  width: isMobile? "100%" : "10%",
  top: isMobile? "30%" : "10%",
  left: isMobile? "37%" : "80%",
},
});

export default CirclesShapesId;