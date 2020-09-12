import React, {useState, useEffect} from "react";
import { Button, Text, StyleSheet, View, Image, ImageBackground, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const Three = ({isRight, isAdd, onPress, isNaked, enableNext}) => {
    const [counter, setCounter] = useState(3);
    const [ isPress, setIsPress ] = useState(false);
    const [rewardState, setRewardState] = useState('rest');
        
    // return <View style={isAdd? isRight? styles.addContainerLeft  : styles.addContainer : styles.mainContainer}>
    return <ImageBackground style={isAdd? styles.bgimageAdd : styles.bgimage} source={
            isNaked ? rewardState == 'reward' ? isAdd ? require("../../assets/number3-normal.png") : require("../../assets/number3-normal.png") : require("../../assets/number3-normal.png") : require("../../assets/number3-normal.png")} resizeMode="contain">
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
            isAdd={isAdd}
            pressedStyle={isNaked? styles.button3 : {}}
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
        top: "11%",
        left: "27%",
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "43%",
        left: "33%"
      },
      button3: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "75%",
        left: "27%"
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "11%",
        left: "27%",
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "43%",
        left: "33%"
      },
      transButton3: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "75%",
        left: "27%"
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
        height: "100%",
        //bottom: "10%",
        left: isMobile? "0%" : "5%",
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

export default Three;