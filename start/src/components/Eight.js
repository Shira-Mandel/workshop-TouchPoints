import React, {useState} from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";
import { Video } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true; 

const Eight = ({disabled, isRight, isAdd, onPress, isNaked, enableNext}) => {
  const [counter, setCounter] = useState(8);
  const [ isPress, setIsPress ] = useState(false);
  const [rewardState, setRewardState] = useState('rest');
      
    if (disabled) {
      return <ImageBackground style={styles.bgimageAdd} source={require("../../assets/number8.png")} resizeMode="contain">
  </ImageBackground>
    }

    return <ImageBackground style={isAdd? styles.bgimageAdd : styles.bgimage} source={
          isNaked ? rewardState == 'reward' ? require("../../assets/kid8.png") : require("../../assets/number8.png") : isAdd ? require("../../assets/number8.png") : rewardState == 'reward' ? require("../../assets/kid8.png") : require("../../assets/kid-point8.png")} resizeMode="contain">
    <Confetti rewardState={rewardState}/>
    <Video
                source={require("../../assets/sounds/8.mp4")}
                shouldPlay={rewardState=='reward'}
                isLooping={false}
                volume={0.1}
                useNativeControls={false}/>
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
        isAdd={isAdd}
        pressedStyle={isNaked? styles.button5 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => {
          if (enableNext != null) {
            enableNext();
          }
          setRewardState('reward')}} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton6 : styles.button6} 
        isAdd={isAdd}
        pressedStyle={isNaked? styles.button6 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => {
          if (enableNext != null) {
            enableNext();
          }
          setRewardState('reward')}} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton7 : styles.button7} 
        isAdd={isAdd}
        pressedStyle={isNaked? styles.button7 : {}}
        setCounter={() => setCounter(counter - 1)} 
        setRewardState={(rewardState) => {
          if (enableNext != null) {
            enableNext();
          }
          setRewardState('reward')}} 
        count={counter}/>
    <Point 
        unpressedStyle={isNaked? styles.transButton8 : styles.button8} 
        pressedStyle={isNaked? styles.button8 : {}}
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

    bgimage:{
      flex: 1,
      position: "relative",
      top: "5%",
      //marginTop: "2%",
      padding: "5%",
      height: "100%",
      aspectRatio: 1/1,
      shadowColor: "#36393d",
      shadowOffset: { width: 1 },
      shadowRadius: 5,
      shadowOpacity: 1,
      alignSelf: "center"
    },
    button1: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "23%",
        left: "28%"
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "31%",
        left: "30%"
      }, 
      button3: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "23%",
        left: "75%"
      },
      button4: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "31%",
        left: "73%"
      },
      button5: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "65%",
        left: "28%"
      },
       button6: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "73%",
        left: "29%"
      },
      button7: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "65%",
        left: "77%"
      },
      button8: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "73%",
        left: "75%"
      },
      transButton1: {
        position: "absolute",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "23%",
        left: "28%"
      },
      transButton2: {
        position: "absolute",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "31%",
        left: "30%"
      }, 
      transButton3: {
        position: "absolute",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "23%",
        left: "75%"
      },
      transButton4: {
        position: "absolute",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "31%",
        left: "73%"
      },
      transButton5: {
        position: "absolute",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "65%",
        left: "28%"
      },
      transButton6: {
        position: "absolute",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "73%",
        left: "29%"
      },
      transButton7: {
        position: "absolute",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "65%",
        left: "77%"
      },
      transButton8: {
        position: "absolute",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: "73%",
        left: "75%"
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
      height: "98%",
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

export default Eight;