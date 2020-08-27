import React, {useState} from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const isMobile = windowWidth <= 812 && true; 

const Five = ({onPress, isNaked}) => {
  const [counter, setCounter] = useState(5);
  const [ isPress, setIsPress ] = useState(false);
  const [rewardState, setRewardState] = useState('rest');
      
  return <View style={styles.mainContainer}>
    <ImageBackground style={styles.bgimage} source={
          isNaked ? rewardState == 'reward' ? require("../../assets/kid5.png") : require("../../assets/number5.png") : require("../../assets/kid5.png")} resizeMode="contain">
    <Confetti rewardState={rewardState}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton1 : styles.button1} 
        pressedStyle={isNaked? styles.button1 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton2 : styles.button2} 
        pressedStyle={isNaked? styles.button2 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton3 : styles.button3} 
        pressedStyle={isNaked? styles.button3 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton4 : styles.button4} 
        pressedStyle={isNaked? styles.button4 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
      <Point 
        unpressedStyle={isNaked? styles.transButton5 : styles.button5} 
        pressedStyle={isNaked? styles.button5 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    </ImageBackground>
  </View>
}

const styles = StyleSheet.create({
    container: {
        height: hp('80%'), 
        width: wp('60%'), 
        flex: 1, 
        position: 'relative'
    },
    mainContainer: {
      width: windowWidth,
      height: windowHeight,
      //display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
  },
    bgimage:{
      flex: 1,
        position: "relative",
        marginTop: "5%",
        borderRadius: 20,
        height: hp('75%'),
        width: wp('80%'),
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        shadowRadius: 5,
        shadowOpacity: 1,
        direction: 'ltr',
    },
    button1: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "17%",
        left: isMobile? "10%" : "30%",
      },
      button2: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "17%",
        left: isMobile? "10%" : "53%"
      }, 
      button3: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "17%",
        left: isMobile? "10%" : "73%"
      },
      button4: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "45%",
        left: isMobile? "10%" : "30%"
      },
      button5: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "73%",
        left: isMobile? "10%" : "30%"
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "17%",
        left: isMobile? "10%" : "30%"
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "17%",
        left: isMobile? "10%" : "53%"
      }, 
      transButton3: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "17%",
        left: isMobile? "10%" : "73%"
      },
      transButton4: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "45%",
        left: isMobile? "10%" : "30%"
      },
      transButton5: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "73%",
        left: isMobile? "10%" : "30%"
      }
});

export default Five;