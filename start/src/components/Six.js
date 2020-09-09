import React, {useState} from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true; 

const Six = ({isRight, isAdd, onPress, isNaked}) => {
  const [counter, setCounter] = useState(6);
  const [ isPress, setIsPress ] = useState(false);
  const [rewardState, setRewardState] = useState('rest');
      
   return <ImageBackground style={isAdd? styles.bgimageAdd : styles.bgimage} source={
          isNaked ? rewardState == 'reward' ? require("../../assets/kid6.png") : require("../../assets/number6.png") : isAdd ? require("../../assets/number6.png") : rewardState == 'reward' ? require("../../assets/kid6.png") : require("../../assets/kid-point6.png")} resizeMode="contain">
    <Confetti rewardState={rewardState}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton1 : styles.button1} 
        pressedStyle={isNaked? styles.button1 : {}}
        isAdd={isAdd}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton2 : styles.button2} 
        pressedStyle={isNaked? styles.button2 : {}}
        isAdd={isAdd}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton3 : styles.button3} 
        pressedStyle={isNaked? styles.button3 : {}}
        isAdd={isAdd}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton4 : styles.button4} 
        isAdd={isAdd}
        pressedStyle={isNaked? styles.button4 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton5 : styles.button5} 
        isAdd={isAdd}
        pressedStyle={isNaked? styles.button5 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton6 : styles.button6} 
        isAdd={isAdd}
        pressedStyle={isNaked? styles.button6 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => setRewardState('reward')} 
        count={counter}/>
    </ImageBackground>
}

const styles = StyleSheet.create({
    bgimage:{
        flex: 1,
        position: "relative",
        marginTop: "5%",
        borderRadius: 20,
        height: "100%",
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
        height: "8%",
        borderRadius: normalize(35),
        top: "66%",
        left: "65%"
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: "8%",
        borderRadius: normalize(35),
        top: "59.3%",
        left: "65%"
      }, 
      button3: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: "8%",
        borderRadius: normalize(35),
        top: "59%",
        left: "27%"
      },
      button4: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: "8%",
        borderRadius: normalize(35),
        top: "65%",
        left: "26%"
      },
      button5: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: "8%",
        borderRadius: normalize(35),
        top: "10.5%",
        left: "67%"
      },
      button6: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: "8%",
        borderRadius: normalize(35),
        top: "5.5%",
        left: "64.9%"
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: "8%",
        borderRadius: normalize(35),
        top: "66%",
        left: "65%"
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: "8%",
        borderRadius: normalize(35),
        top: "59.3%",
        left: "65%"
      }, 
      transButton3: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: "8%",
        borderRadius: normalize(35),
        top: "59%",
        left: "27%"
      },
      transButton4: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: "8%",
        borderRadius: normalize(35),
        top: "65%",
        left: "26%"
      },
      transButton5: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: "8%",
        borderRadius: normalize(35),
        top: "10.5%",
        left: "67%"
      },
      transButton6: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: "8%",
        borderRadius: normalize(35),
        top: "5.5%",
        left: "64.9%"
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

export default Six;