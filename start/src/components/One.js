import React, {useState} from "react";
import { StyleSheet, ImageBackground, Dimensions} from "react-native";
import normalize from "react-native-normalize";
import Point from "./Point";
import { Video } from 'expo-av';
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const One = ({disabled, isRight, isAdd, onPress, isNaked, enableNext}) => {
    const [counter, setCounter] = useState(1);
    const [rewardState, setRewardState] = useState('rest');
    
    if (disabled) {
      return <ImageBackground style={styles.bgimageAdd} source={require("../../assets/number1.png")} resizeMode="contain">
  </ImageBackground>
    }
    return <ImageBackground style={isAdd? styles.bgimageAdd : styles.bgimage} source={
            isNaked ? rewardState == 'reward' ? require("../../assets/kid1.png") : require("../../assets/number1.png") : isAdd ? require("../../assets/number1.png") : rewardState == 'reward' ? require("../../assets/kid1.png") : require("../../assets/kid-point1.png")} resizeMode="contain">
            <Confetti rewardState={rewardState}/>
            <Video
                source={require("../../assets/sounds/1.mp4")}
                shouldPlay={rewardState=='reward'}
                isLooping={false}
                volume={0.1}
                useNativeControls={false}/>
            <Point 
            unpressedStyle={isNaked? styles.transButton : styles.button} 
            pressedStyle={isNaked? styles.button : {}}
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
        marginTop: "2%",
        marginBottom: "2%",
        borderRadius: 20,
        height: "100%",
        aspectRatio: 1/1,
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        shadowRadius: 5,
        shadowOpacity: 1,
        direction: 'ltr',
        right: "10%",
        alignSelf: "center"
      },
    button: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        left: "61.5%",
        top: "20%"
      },
      transButton: {
        position: "absolute",
        //backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        left: "61.5%",
        top: "20%"
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
      right: "12%",
      bottom: "10%",
      height: "100%",
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