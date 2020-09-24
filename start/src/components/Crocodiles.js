import React, {useState, useEffect} from "react";
import { StyleSheet, View, Dimensions, Image, ImageBackground } from "react-native";
import Draggable from 'react-native-draggable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true; 

const Crocodiles = ({isStage2, isLeftBigger, setReward, reward, enableNext}) => {
    const [isLeftComplete, setIsLeftComplete] = useState(false);
    const [isRightComplete, setIsRightComplete] = useState(false);
    const [imageSource, setImageSource] = useState("");

    if (reward == 'rest') {
        return <View style={styles.mainContainer}>
        <View style={styles.draggableContainer}/>
    <Draggable shouldReverse={true} x={windowWidth * 0.616} y={windowHeight * 0.58} onDragRelease={(event, gestureState) => {
        if (gestureState.moveX >= (windowWidth * 0.22) && gestureState.moveX <= (windowWidth * 0.65) && gestureState.moveY >= (windowHeight * 0.34) && gestureState.moveY <= (windowHeight * 0.54) && isLeftBigger) {
            setReward();
            enableNext();
            setImageSource(isStage2? require("../../assets/left-big.png") : require("../../assets/croc-right.png"));
            setIsLeftComplete(true);
        }
    }}>
        <Image resizeMode="contain" style={isStage2? styles.imageAdv : styles.image} source={isStage2? require("../../assets/left-big.png") : require("../../assets/croc-right.png")}/>
    </Draggable>
    <Draggable shouldReverse={true} x={0} y={windowHeight * 0.58} onDragRelease={(event, gestureState) => {
        if (gestureState.moveX >= (windowWidth * 0.22) && gestureState.moveX <= (windowWidth * 0.65) && gestureState.moveY >= (windowHeight * 0.34) && gestureState.moveY <= (windowHeight * 0.54) && !isLeftBigger) {
            setReward();
            enableNext();
            setImageSource(isStage2? require("../../assets/right-big.png") : require("../../assets/croc-left.png"));
            setIsRightComplete(true);
        }
    }}>
        <Image resizeMode="contain" style={isStage2? styles.image2Adv : styles.image2} source={isStage2? require("../../assets/right-big.png") : require("../../assets/croc-left.png")}/>
    </Draggable>
    </View>
    }

    if (isLeftComplete || isRightComplete) {
        return <View style={styles.mainContainer}>
        <View style={styles.draggableContainer}>
        <Image resizeMode="contain" style={styles.imageAfter} source={imageSource}/>
            </View>
    </View>
    }
    return;
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1/1,
        height: "80%",
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        shadowRadius: 5,
        shadowOpacity: 1,
        bottom: "5%",
        left: isMobile? "14%" : "0%",
    },
    image2: {
        aspectRatio: 1/1,
        height: "80%",
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        shadowRadius: 5,
        shadowOpacity: 1,
        bottom: "5%",
    },
    imageAdv: {
        aspectRatio: 1/1,
        height: "70%",
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        shadowRadius: 5,
        shadowOpacity: 1,
        left: isMobile? "20%" : "12%",
        bottom: "-10%"
    },
    image2Adv: {
        aspectRatio: 1/1,
        height: "70%",
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        shadowRadius: 5,
        shadowOpacity: 1,
        bottom: "-10%"
    },
    imageAfter: {
        aspectRatio: 1/1,
        height: "120%",
        alignSelf: "center",
        bottom: "5%"
    },
    mainContainer: {
        height: "100%", 
        width: "100%"
    },
    draggableContainer: {
        alignSelf: "center", 
        right: isMobile? "2%" : "0%",
        marginTop: isMobile? "5%" : "15%", 
        height: isMobile? "50%" : "35%", 
        borderColor: "grey", 
        width: "40%",  
        borderRadius: normalize(20), 
        borderWidth: 1,
    }
});

export default Crocodiles;