import React, {useState} from "react";
import { Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity, c, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const Two = ({isRight, isAdd, onPress, isNaked, enableNext}) => {
    const [counter, setCounter] = useState(2);
    const [rewardState, setRewardState] = useState('rest');

    return <ImageBackground style={isAdd? styles.bgimageAdd : styles.bgimage} source={
        isNaked ? rewardState == 'reward' ? require("../../assets/kid2.png") : require("../../assets/number2.png") : isAdd ? require("../../assets/number2.png") : rewardState == 'reward' ? require("../../assets/kid2.png") : require("../../assets/kid-point2.png")} resizeMode="contain">
        <Confetti rewardState={rewardState}/>
        <Point 
            unpressedStyle={isNaked? styles.transButton1 : styles.button1} 
            pressedStyle={isNaked? styles.button1 : {}}
            setCounter={() => setCounter(counter - 1)} 
            setRewardState={(rewardState) => {
                if (enableNext != null) {
                  enableNext();
                }
              setRewardState('reward')}} 
            count={counter}
            isAdd={isAdd}/>
        <Point 
            unpressedStyle={isNaked? styles.transButton2 : styles.button2} 
            pressedStyle={isNaked? styles.button2 : {}}
            setCounter={() => setCounter(counter - 1)} 
            isAdd={isAdd}
            setRewardState={(rewardState) => {
              if (enableNext != null) {
                enableNext();
              }
              setRewardState('reward')}} 
            count={counter}/>
        </ImageBackground>
}


const styles = StyleSheet.create({
      bgimage:{
        flex: 1,
        position: "relative",
        marginTop: "1%",
        borderRadius: 20,
        height: "95%",
        aspectRatio: 1/1,
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        shadowRadius: 5,
        shadowOpacity: 1,
        direction: 'ltr',
        alignSelf: "center"
      },
    image: {
        position: "absolute",
        aspectRatio: 1 / 1,
        height: '100%',
        bottom:'12%',
        left:'30%',
        resizeMode: "contain"
    },
    button1: {
        position: "absolute",
        backgroundColor: "black",
        borderRadius: normalize(35),
        left: '13%',
        top: '18%',
        height: "10%",
        aspectRatio: 1/1
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        borderRadius: normalize(35),
        left: '15.5%',
        top: "69%",
        height: "10%",
        aspectRatio: 1/1
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        borderRadius: normalize(35),
        left: '13%',
        top: '18%',
        height: "10%",
        aspectRatio: 1/1
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        borderRadius: normalize(35),
        left: '15.5%',
        top: "69%",
        height: "10%",
        aspectRatio: 1/1
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
      marginTop: "2%",
      aspectRatio: 1/1,
      shadowColor: "#36393d",
      left: "10%"
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

export default Two;