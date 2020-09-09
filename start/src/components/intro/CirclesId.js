import React, {useState} from "react";
import { Dimensions, Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RewardsComponent from 'react-native-rewards';
import normalize from "react-native-normalize";
import { render } from "react-dom";
import { color } from "react-native-reanimated";
import LineHorizontal from "./LineHorizontal";
import LineVertical from "./LineVertical";
import Circle from "./Circle";
import Confetti from "../../animations/Confetti";
import WrongLineHorizontal from "./WrongLineHorizontal";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const CirclesId = () => {
  const [counter, setCounter] = useState(2);
  const [rewardState, setRewardState] = useState('rest');

  return <View style={{height: windowHeight, width: windowWidth, position: 'relative'}}>
  <Confetti rewardState={rewardState}/>
   <Text style = {styles.Text}>מצאו את העיגולים </Text>
   <WrongLineHorizontal style={styles.LineHorizontal1}/>
   <WrongLineHorizontal style={styles.LineHorizontal2}/>
   <WrongLineHorizontal style={styles.LineHorizontal3}/>
   <LineVertical style={styles.LineVertical1}/>
   <LineVertical style={styles.LineVertical2}/>
   <Circle style={styles.Circle1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
   <Circle style={styles.Circle2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
    </View>
}

const styles = StyleSheet.create({
Text: {
fontSize: normalize(8),
color: "#002266", 
fontWeight: 'bold',
textAlign: "center"
},
LineHorizontal1: {
position: "absolute",
height: 100,
top: isMobile? "60%" : "70%",
left: isMobile? "10%" : "20%"
},
LineHorizontal2: {
position: "absolute",
height: 100,
top: isMobile? "7%" : "10%",
left: isMobile? "50%" : "70%",
},
LineHorizontal3: {
position: "absolute",
height: 100,
top: isMobile? "40%" : "40%",
left: isMobile? "40%" : "50%"
},
LineVertical1: {
position: "absolute",
top: isMobile? "10%" : "30%",
left: isMobile? "30%" : "8%",
},
LineVertical2: {
position: "absolute",
top: isMobile? "50%" : "30%",
left: isMobile? "80%" : "8%",
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