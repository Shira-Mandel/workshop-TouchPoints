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
const Crocodiles = ({isLeftBigger, setReward, reward}) => {
    const [isLeftComplete, setIsLeftComplete] = useState(false);
    const [isRightComplete, setIsRightComplete] = useState(false);
    const [imageSource, setImageSource] = useState("");
//     x 257.6666564941406
// y 218.3333282470703
// =============
// x 533.3333282470703
// y 117.33332824707031
    // const minX = isMobile? 250 : 420
    // const minY = isMobile? 210 : 230
    // const maxX = isMobile? 540 : 600
    // const maxY = isMobile? 
//     812
// 375
// 1080
// 810
    

    if (reward == 'rest') {
        return <View style={{height: "100%", width: "100%"}}>
        <View style={{alignSelf: "center", marginTop: "15%", height: "35%", width: "40%", borderWidth: 1}}/>
    <Draggable shouldReverse={true} x={windowWidth * 0.6} y={windowHeight * 0.58} onDragRelease={(event, gestureState) => {
        if (gestureState.moveX >= (windowWidth * 0.22) && gestureState.moveX <= (windowWidth * 0.65) && gestureState.moveY >= (windowHeight * 0.34) && gestureState.moveY <= (windowHeight * 0.54) && isLeftBigger) {
            setReward();
            setImageSource(require("../../assets/croc-right.png"));
            setIsLeftComplete(true);
        }
    }}>
        <Image resizeMode="contain" style={styles.image} source={require("../../assets/croc-right.png")}/>
    </Draggable>
    <Draggable shouldReverse={true} x={windowWidth * 0.02} y={windowHeight * 0.58} onDragRelease={(event, gestureState) => {
        if (gestureState.moveX >= (windowWidth * 0.22) && gestureState.moveX <= (windowWidth * 0.65) && gestureState.moveY >= (windowHeight * 0.34) && gestureState.moveY <= (windowHeight * 0.54) && !isLeftBigger) {
            setReward();
            setImageSource(require("../../assets/croc-left.png"));
            setIsRightComplete(true);
        }
    }}>
        <Image resizeMode="contain" style={styles.image} source={require("../../assets/croc-left.png")}/>
    </Draggable>
    </View>
    }

    if (isLeftComplete || isRightComplete) {
        return <View style={{height: "100%", width: "100%"}}>
        <View style={{alignSelf: "center", marginTop: "15%", borderWidth: 1, height: "35%", width: "40%"}}>
        <Image resizeMode="contain" style={styles.imageAfter} source={imageSource}/>
            </View>
    </View>
    }
    return;
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1/1,
        height: isMobile? 220 : 400
    },
    imageAfter: {
        aspectRatio: 1/1,
        height: isMobile? 220 : 400,
        alignSelf: "center",
        bottom: isMobile? "40%" : "30%"
    }
});

export default Crocodiles;