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

const MemoryCircle = () => { //צריך לשנות - להוריד את העיגול ולהוסיף נקודות
  const [counter, setCounter] = useState(4);
  const [rewardState, setRewardState] = useState('rest');

return <View style={styles.mainContainer}>
        <ImageBackground style={styles.bgimage} source={require("../../../assets/CircleHead2.png")} resizeMode="contain">
            <Confetti rewardState={rewardState}/>
           <Text style = {styles.Text}>לחצו על הנקודות המתאימות  </Text>
          <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button4} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
bgimage: {
    position: "relative",
    //alignSelf: "center",
    //justifyContent: "center",
    //top: normalize(10),
    marginTop: isMobile ? '2%' : '6%',
    //padding: "5%",
    borderRadius: 20,
    height: hp('80%'),
    width: wp('60%'),
    //flex: 1,
    shadowColor: "#36393d",
    shadowOffset: { width: 1 },
    //elevation: 20,
    shadowRadius: 5,
    shadowOpacity: 1,
    direction: 'ltr',
},
Text: {
  fontSize:15,
  color: "#002266", 
  fontWeight: 'bold'
},
button1: {
    position: "absolute",
    backgroundColor: "black",
    borderRadius: normalize(35),
    left: isMobile ? '12%' : '6%',
    top: isMobile ? "45%" : '18%',
    width: isMobile ? 45 : 75,
    height: isMobile ? 45 : 75,
  },

  button2: {
    position: "absolute",
    backgroundColor: "black",
    borderRadius: normalize(35),
    left: isMobile ? '12%' : '6%',
    top: isMobile ? "58%" : '18%',
    width: isMobile ? 45 : 75,
    height: isMobile ? 45 : 75,
  },
  button3: {
      position: "absolute",
      backgroundColor: "black",
      borderRadius: normalize(35),
      left: isMobile ? '73%' : '6%',
      top: isMobile ? "45%" : '18%',
      width: isMobile ? 45 : 75,
      height: isMobile ? 45 : 75,
    },
    button4: {
        position: "absolute",
        backgroundColor: "black",
        borderRadius: normalize(35),
        left: isMobile ? '73%' : '6%',
        top: isMobile ? "58%" : '18%',
        width: isMobile ? 45 : 75,
        height: isMobile ? 45 : 75,
      },

});

export default MemoryCircle;