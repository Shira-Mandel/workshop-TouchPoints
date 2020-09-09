import React, {useState} from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true; 

const Nine = ({isRight, isAdd, onPress, isNaked}) => {
  const [counter, setCounter] = useState(9);
  const [ isPress, setIsPress ] = useState(false);
  const [rewardState, setRewardState] = useState('rest');
      
  return <ImageBackground style={isAdd? styles.bgimageAdd : styles.bgimage} source={
        isNaked ? rewardState == 'reward' ? require("../../assets/kid9.png") : require("../../assets/number9.png") : isAdd ? require("../../assets/number9.png") : rewardState == 'reward' ? require("../../assets/kid9.png") : require("../../assets/kid-point9.png")} resizeMode="contain">
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
    <Point 
        unpressedStyle={isNaked? styles.transButton6 : styles.button6} 
        pressedStyle={isNaked? styles.button6 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton7 : styles.button7} 
        pressedStyle={isNaked? styles.button7 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton8 : styles.button8} 
        pressedStyle={isNaked? styles.button8 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton9 : styles.button9} 
        pressedStyle={isNaked? styles.button9 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    </ImageBackground>
}

const styles = StyleSheet.create({
    bgimage:{
      flex: 1,
      position: "relative",
      marginTop: "1%",
      height: "95%",
      aspectRatio: 1/1,
      shadowColor: "#36393d",
      shadowOffset: { width: 1 },
      shadowRadius: 5,
      shadowOpacity: 1,
      direction: 'ltr',
      alignSelf: "center"
    },
    button1: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "16%",
        left: "22%"
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "6%",
        left: "33.5%"
      }, 
      button3: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "-1%",
        left: "48%"
      },
      button4: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "35.5%",
        left: "33%"
      },
      button5: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "43%",
        left: "36%"
      },
       button6: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "25%",
        left: "66%"
      },
      button7: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "32.8%",
        left: "68%"
      },
      button8: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "87%",
        left: "48%"
      },
      button9: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "87%",
        left: "55%"
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "16%",
        left: "22%"
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "6%",
        left: "33.5%"
      }, 
      transButton3: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "-1%",
        left: "48%"
      },
      transButton4: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "35.5%",
        left: "33%"
      },
      transButton5: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "43%",
        left: "36%"
      },
      transButton6: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "25%",
        left: "66%"
      },
      transButton7: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "32.8%",
        left: "68%"
      },
      transButton8: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "87%",
        left: "48%"
      },
      transButton9: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '9%',
        borderRadius: normalize(35),
        top: "87%",
        left: "55%"
      },
      addContainer: {
        position: "absolute",
        width: isMobile? "15%" : "25%",
        aspectRatio: 1/1,
        borderRadius: 150,
        backgroundColor: "pink",
        top: isMobile? "22%" : "22%",
        left: isMobile? "52%" : "54%",
    },
    bgimageAdd: {
      aspectRatio: 1/1,
      shadowColor: "#36393d",
    },
    addContainerLeft: {
      position: "absolute",
      width: isMobile? "15%" : "25%",
      aspectRatio: 1/1,
      borderRadius: 150,
      backgroundColor: "pink",
      top: isMobile? "22%" : "22%",
      left: isMobile? "32%" : "21%",
  }
});

export default Nine;