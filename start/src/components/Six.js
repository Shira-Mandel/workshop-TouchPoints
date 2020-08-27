import React, {useState} from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true; 

const Six = ({onPress, isNaked}) => {
  const [counter, setCounter] = useState(6);
  const [ isPress, setIsPress ] = useState(false);
  const [rewardState, setRewardState] = useState('rest');
      
  return <View style={styles.mainContainer}>
    <ImageBackground style={styles.bgimage} source={
          isNaked ? rewardState == 'reward' ? require("../../assets/kid6.png") : require("../../assets/number6.png") : require("../../assets/kid6.png")} resizeMode="contain">
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bgimage:{
      flex: 1,
      position: "relative",
        marginTop: "2%",
        borderRadius: 20,
        height: hp('88%'),
        width: isMobile? wp('55%') : wp('90%'),
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
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "29%",
        left: isMobile? "22%" : "94%"
      },
      button2: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "24%",
        left: isMobile? "22%" : "85%"
      }, 
      button3: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "30%",
        left: isMobile? "22%" : "30%"
      },
      button4: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "40%",
        left: isMobile? "22%" : "30%"
      },
      button5: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "50%",
        left: isMobile? "22%" : "30%"
      },
      button6: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "60%",
        left: isMobile? "22%" : "30%"
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "29%",
        left: isMobile? "22%" : "94%"
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "24%",
        left: isMobile? "22%" : "85%"
      }, 
      transButton3: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "30%",
        left: isMobile? "22%" : "30%"
      },
      transButton4: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "40%",
        left: isMobile? "22%" : "30%"
      },
      transButton5: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "50%",
        left: isMobile? "22%" : "30%"
      },
      transButton6: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: normalize(25),
        borderRadius: normalize(35),
        top: isMobile? "22%" : "60%",
        left: isMobile? "22%" : "30%"
      },
});

export default Six;