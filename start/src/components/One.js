import React, {useState, useEffect, useRef} from "react";
import { StyleSheet, View, Image, ImageBackground, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const One = ({isRight, isAdd, onPress, isNaked}) => {
    const [counter, setCounter] = useState(1);
    const [ isPress, setIsPress ] = useState(false);
    const [rewardState, setRewardState] = useState('rest');

    return <ImageBackground style={isAdd? styles.bgimageAdd : styles.bgimage} source={
            isNaked ? rewardState == 'reward' ? require("../../assets/kid1.png") : require("../../assets/number1.png") : isAdd ? require("../../assets/number1.png") : rewardState == 'reward' ? require("../../assets/kid1.png") : require("../../assets/kid-point1.png")} resizeMode="contain">
            <Confetti rewardState={rewardState}/>
            <Point 
            unpressedStyle={isNaked? styles.transButton : styles.button} 
            pressedStyle={isNaked? styles.button : {}}
            isAdd={isAdd}
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
    button: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '15%',
        borderRadius: normalize(35),
        left: "60%",
        top: "5.2%"

      },
      transButton: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '15%',
        borderRadius: normalize(35),
        left: "60%",
        top: "5.2%"
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
      right: "15%",
      //aspectRatio: 1/1,
      height: "95%",
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

export default One;