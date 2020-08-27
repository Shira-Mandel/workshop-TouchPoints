import React, {useState} from "react";
import { TouchableWithoutFeedback, Button, Dimensions, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true; 

const Four = ({onPress, isNaked}) => {
  const [counter, setCounter] = useState(4);
  const [ isPress, setIsPress ] = useState(false);
  const [rewardState, setRewardState] = useState('rest');
     
  return <View style={styles.mainContainer}>
        <ImageBackground style={styles.bgimage} source={
              isNaked ? rewardState == 'reward' ? require("../../assets/kid4.png") : require("../../assets/number4.png") : require("../../assets/kid4.png")} resizeMode="contain">
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
        </ImageBackground>
    </View>
  // return <ImageBackground style={styles.bgimage} source={require("../../assets/kid4.png")} resizeMode="contain">
  //     <View style={styles.container}>
  //         <Confetti rewardState={rewardState}/>
  //         <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
  //         <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
  //         <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
  //         <Point unpressedStyle={styles.button4} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
  //     </View>
  // </ImageBackground>
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
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        left: isMobile ? '24%' : '6%',
        top: isMobile ? "18%" : '18%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      },
      button2: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        left: isMobile ? '24%' : '20%',
        top: isMobile ? "18%" : '18%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      }, 
      button3: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        left: isMobile ? '24%' : '30%',
        top: isMobile ? "18%" : '18%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      },
      button4: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        left: isMobile ? '24%' : '40%',
        top: isMobile ? "18%" : '18%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        left: isMobile ? '24%' : '6%',
        top: isMobile ? "18%" : '18%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        left: isMobile ? '24%' : '20%',
        top: isMobile ? "18%" : '18%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      }, 
      transButton3: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        left: isMobile ? '24%' : '30%',
        top: isMobile ? "18%" : '18%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      },
      transButton4: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        left: isMobile ? '24%' : '40%',
        top: isMobile ? "18%" : '18%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      },
});

export default Four;