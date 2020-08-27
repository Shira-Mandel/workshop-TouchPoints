import React, {useState} from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true; 

const Eight = ({onPress, isNaked}) => {
  const [counter, setCounter] = useState(8);
  const [ isPress, setIsPress ] = useState(false);
  const [rewardState, setRewardState] = useState('rest');
      
  return <View style={styles.mainContainer}>
    <ImageBackground style={styles.bgimage} source={
        isNaked ? require("../../assets/number8.png") : require("../../assets/kid8.png")} resizeMode="contain">
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
        marginTop: "2%",
        borderRadius: 20,
        height: hp('85%'),
        width: isMobile? wp('55%') : wp('90%'),
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        shadowRadius: 5,
        shadowOpacity: 1,
        direction: 'ltr',
    },
    button1: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "22%",
        left: isMobile? "10%" : "11%"
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "30%",
        left: isMobile? "10%" : "11%"
      }, 
      button3: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "40%",
        left: isMobile? "10%" : "11%"
      },
      button4: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "50%",
        left: isMobile? "10%" : "11%"
      },
      button5: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "50%",
        left: isMobile? "10%" : "80%"
      },
       button6: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "20%",
        left: isMobile? "10%" : "80%"
      },
      button7: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "30%",
        left: isMobile? "10%" : "80%"
      },
      button8: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "40%",
        left: isMobile? "10%" : "80%"
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "22%",
        left: isMobile? "10%" : "11%"
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "30%",
        left: isMobile? "10%" : "11%"
      }, 
      transButton3: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "40%",
        left: isMobile? "10%" : "11%"
      },
      transButton4: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "50%",
        left: isMobile? "10%" : "11%"
      },
      transButton5: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "50%",
        left: isMobile? "10%" : "80%"
      },
      transButton6: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "20%",
        left: isMobile? "10%" : "80%"
      },
      transButton7: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "30%",
        left: isMobile? "10%" : "80%"
      },
      transButton8: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: isMobile? "10%" : "40%",
        left: isMobile? "10%" : "80%"
      },
});

export default Eight;