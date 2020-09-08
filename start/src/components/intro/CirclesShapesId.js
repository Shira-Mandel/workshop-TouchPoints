import React, {useState} from "react";
import { Dimensions,TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RewardsComponent from 'react-native-rewards';
import normalize from "react-native-normalize";
import { render } from "react-dom";
import { color } from "react-native-reanimated";
import LineHorizontal from "./LineHorizontal";
import LineVertical from "./LineVertical";
import Circle from "./Circle";
import Confetti from "../../animations/Confetti";


const windowWidth = Dimensions.get('window').width;
const isMobile = windowWidth <= 812 && true;

const CirclesShapesId = () => {
  const [counter, setCounter] = useState(5);
  const [rewardState, setRewardState] = useState('rest');

  return <View style={styles.mainContainer}>
           <Confetti rewardState={rewardState}/>
           <Text style = {styles.Text}>מצאו את העיגולים </Text>
           {/* <ImageBackground style={styles.bgimagewindow} source={rewardState == 'reward' ? require("../../../assets/window.png") : require("../../../assets/window.png")} resizeMode="contain">
           <LineHorizontal style={styles.LineHorizontal1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal3} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           </ImageBackground>
           <ImageBackground style={styles.bgimagehouse} source={rewardState == 'reward' ? require("../../../assets/house.png") : require("../../../assets/house.png")} resizeMode="contain">
           <LineHorizontal style={styles.LineHorizontal4} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal5} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           </ImageBackground> */}
           <ImageBackground style={styles.bgimagebicycle} source={rewardState == 'reward' ? require("../../../assets/bicycle.png") : require("../../../assets/bicycle.png")} resizeMode="contain">
           {/* <Circle style={styles.Circle1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <Circle style={styles.Circle2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/> */}
          </ImageBackground> 
            </View>
}

const styles = StyleSheet.create({
  Text: {
    fontSize:15,
    color: "#002266", 
  //position: "absolute",
  fontWeight: 'bold',
  left: isMobile ? '35%' : '6%',
  top: isMobile ? "10%" : '18%',
  position: "absolute",

},
mainContainer: {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
 // {alignItems: 'center', display: 'flex',height: '100%', width: '100%', position: 'relative'}
},
bgimagewindow: {
  position: "relative",
  //alignSelf: "center",
  //justifyContent: "center",
  //top: normalize(10),
  marginTop: isMobile ? '2%' : '6%',
  //padding: "5%",
  borderRadius: 20,
  left: isMobile ? '25%' : '6%',
  top: isMobile ? "0%" : '18%',
  width: isMobile ? "100%" : 75,
  height: isMobile ?'100%' : 75,
  //flex: 1,
  shadowColor: "#36393d",
  shadowOffset: { width: 1 },
  //elevation: 20,
  shadowRadius: 5,
  shadowOpacity: 1,
  direction: 'ltr',
 // resizeMode:"contain"
},
bgimagehouse: {
  position: "absolute",
  //alignSelf: "center",
  //justifyContent: "center",
  //top: normalize(10),
  marginTop: isMobile ? '2%' : '6%',
  //padding: "5%",
  borderRadius: 20,
  left: isMobile ? '-20%' : '6%',
  top: isMobile ? "16%" : '18%',
  width: isMobile ? "100%" : 75,
  height: isMobile ?'80%' : 75,
  //flex: 1,
  shadowColor: "#36393d",
  shadowOffset: { width: 1 },
  //elevation: 20,
  shadowRadius: 5,
  shadowOpacity: 1,
  direction: 'ltr',
},
bgimagebicycle: {
  position: "absolute",
  //alignSelf: "center",
  //justifyContent: "center",
  //top: normalize(10),
  marginTop: isMobile ? '2%' : '6%',
  //padding: "5%",
  borderRadius: 20,
  left: isMobile ? '0%' : '6%',
  top: isMobile ? "20%" : '18%',
  width: isMobile ? "100%" : 75,
  height: isMobile ?'100%' : 75,
  //flex: 1,
  shadowColor: "#36393d",
  shadowOffset: { width: 1 },
  //elevation: 20,
  shadowRadius: 5,
  shadowOpacity: 1,
  direction: 'ltr',
},
LineHorizontal1: {
  position: "absolute",
  height: isMobile? 1 : "10%",
  width: isMobile? "18%" : "10%",
  top: isMobile? "0%" : "70%",
  left: isMobile? "39%" : "20%"
},
LineHorizontal2: {
  position: "absolute",
  //height: 100,
  width: isMobile? "18%" : "10%",
  top: isMobile? "24%" : "10%",
  left: isMobile? "39%" : "80%",
},
LineHorizontal3: {
  position: "absolute",
  width: isMobile? "17%" : "10%",
 // height: 100,
  top: isMobile? "50%" : "40%",
  left: isMobile? "39%" : "50%"
},
LineHorizontal4: {
  position: "absolute",
  //height: 100,
  width: isMobile? "16%" : "10%",
  top: isMobile? "7%" : "10%",
  left: isMobile? "41%" : "80%",
},
LineHorizontal5: {
  position: "absolute",
  width: isMobile? "16%" : "10%",
 // height: 100,
  top: isMobile? "40%" : "40%",
  left: isMobile? "41%" : "50%"

},
Circle1: {
  position: "absolute",
  //backgroundColor: "black",
  //aspectRatio: 1 /1,
  //width:50,
  height: 100,
  width: 100,
//  borderRadius: normalize(2000),
  top: 150,
  left: 20,
 // zIndex:1

},
Circle2: {
  position: "absolute",
  //backgroundColor: "black",
  //aspectRatio: 1 /1,
  //width:50,
  height: 100,
  width: 100,
//  borderRadius: normalize(2000),
  top: 20,
  left: 400,
 // zIndex:1
  
},
});

export default CirclesShapesId;