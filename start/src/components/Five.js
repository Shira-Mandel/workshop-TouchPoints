import React, {useState} from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const isMobile = windowWidth <= 812 && true; 

const Five = ({isRight, isAdd, onPress, isNaked, enableNext}) => {
  const [counter, setCounter] = useState(5);
  const [ isPress, setIsPress ] = useState(false);
  const [rewardState, setRewardState] = useState('rest');
      
  return <ImageBackground style={isAdd? styles.bgimageAdd : styles.bgimage} source={
        isNaked ? rewardState == 'reward' ? require("../../assets/kid5.png") : require("../../assets/number5.png") : isAdd ? require("../../assets/number5.png") : rewardState == 'reward' ? require("../../assets/kid5.png") : require("../../assets/kid-point5.png")} resizeMode="contain">
    <Confetti rewardState={rewardState}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton1 : styles.button1} 
        pressedStyle={isNaked? styles.button1 : {}}
        isAdd={isAdd}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => {
           if (enableNext != null) {
             enableNext();
           }
          setRewardState('reward')}} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton2 : styles.button2} 
        pressedStyle={isNaked? styles.button2 : {}}
        isAdd={isAdd}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => {
          if (enableNext != null) {
            enableNext();
          }
          setRewardState('reward')}} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton3 : styles.button3} 
        pressedStyle={isNaked? styles.button3 : {}}
        isAdd={isAdd}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => {
          if (enableNext != null) {
            enableNext();
          }
          setRewardState('reward')}} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton4 : styles.button4} 
        isAdd={isAdd}
        pressedStyle={isNaked? styles.button4 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => {
          if (enableNext != null) {
            enableNext();
          }
          setRewardState('reward')}} 
        count={counter}/>
      <Point 
        unpressedStyle={isNaked? styles.transButton5 : styles.button5} 
        pressedStyle={isNaked? styles.button5 : {}}
        isAdd={isAdd}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => {
          if (enableNext != null) {
            enableNext();
          }
          setRewardState('reward')}} 
        count={counter}/>
    </ImageBackground>
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
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
  },
    bgimage:{
      flex: 1,
        position: "relative",
        marginTop: "5%",
        borderRadius: 20,
        height: "100%",
        aspectRatio: 1/1,
        //width: wp('80%'),
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
        height: '10%',
        borderRadius: normalize(35),
        top: "9%",
        left: isMobile? "32%" : "32%",
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "9%",
        left: "51%"
      }, 
      button3: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "9%",
        left: "73%"
      },
      button4: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "43%",
        left: "31%"
      },
      button5: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "80%",
        left: "31%"
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "9%",
        left: "32%",
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "9%",
        left: "51%"
      }, 
      transButton3: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "9%",
        left: "73%"
      },
      transButton4: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "43%",
        left: "31%"
      },
      transButton5: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "80%",
        left: "31%"
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
        margin: "2%",
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

export default Five;