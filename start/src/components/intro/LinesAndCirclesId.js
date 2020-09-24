import React, {useState} from "react";
import {Dimensions,TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
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

const LinesAndCirclesId = () => {
  const [counter, setCounter] = useState(5);
  const [rewardState, setRewardState] = useState('rest');

  return <View style={{alignItems: 'center', display: 'flex',height: '100%', width: '100%', position: 'relative'}}>
          <Confetti rewardState={rewardState}/>
           <LineHorizontal style={styles.LineHorizontal1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal3} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineVertical style={styles.LineVertical1}/>
           <LineVertical style={styles.LineVertical2}/>
           <Circle style={styles.Circle1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <Circle style={styles.Circle2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
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
    left: isMobile? "70%" : "80%", 
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