import React, {useState} from "react";
import { Text, StyleSheet, View, ImageBackground, Dimensions} from "react-native";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import Confetti from "../animations/Confetti";
import Crocodiles from "../components/Crocodiles";
import { Video } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const BigSmallDigitScreen2 = ({navigation, route}) => {
    const [counter, setCounter] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const [rewardState, setRewardState] = useState('rest');

    return <ImageBackground style={styles.bgimage} source={require("../../assets/lake.png")} resizeMode="stretch"> 
        <Confetti rewardState={rewardState}/>
        {<Video
                source={require("../../assets/sounds/crocs-stage2.mp4")}
                shouldPlay={counter==0}
                isLooping={false}
                volume={0.1}
                useNativeControls ={false}/>}
        <HomeButton style={{top: "1.5%", left: "1%"}} onPress={() => {navigation.navigate('Home')}}/>
        <View style={styles.addContainerLeft}>
         {route.params.arr[counter].first}
         </View>
         <View style={styles.addContainer}>
         {route.params.arr[counter].second}
         </View>
        <Crocodiles isStage2={true} isLeftBigger={route.params.arr[counter].flag} enableNext={() => setIsDisabled(false)} setReward={() => setRewardState('reward')} reward={rewardState}/> 
        <NextButton disabled={isDisabled} onPress={() => {
            if (counter >= 4)
            {
                navigation.navigate('Home');
            }
            else
            {
                setCounter(counter + 1);
                setIsDisabled(true);
                setRewardState('rest');
            }
        }}/>
        </ImageBackground> 
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  addContainer: {
    position: "absolute",
    width: isMobile? "30%" : "42%",
    height: "50%",
    justifyContent: "center",
    top: "15%",
    left: isMobile? "65%" : "63%",
    shadowColor: "#36393d",
    shadowOffset: { width: 1 },
    shadowRadius: 5,
    shadowOpacity: 1,
},
addContainerLeft: {
  position: "absolute",
  height: "50%",
  width: isMobile? "30%" : "42%",
  justifyContent: "center",
  top: "15%",
  left: isMobile? "0%" : "-5%",
  shadowColor: "#36393d",
  shadowOffset: { width: 1 },
  shadowRadius: 5,
  shadowOpacity: 1,
},
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
  list1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center",
  },
  list2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center",
    marginBottom: "10%"
  },
  infoIcon: {
      fontSize: normalize(30),
      alignSelf: "flex-start"
  },
  infoStyle: {
      position: "absolute",
      top: "100%",
      left: "2%"
  },
  bgimage: {
    position: "relative",
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "#01dbca",
    flex: 1
  }
});

export default BigSmallDigitScreen2;