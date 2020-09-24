import React, {useState} from "react";
import { Dimensions,TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RewardsComponent from 'react-native-rewards';
import {TouchableOpacity} from "react-native-gesture-handler";
import normalize from "react-native-normalize";
import { render } from "react-dom";
import { color } from "react-native-reanimated";
import LineHorizontal from "./LineHorizontal";
import LineVertical from "./LineVertical";
import Circle from "./Circle";
import Confetti from "../../animations/Confetti";


const windowWidth = Dimensions.get('window').width;
const isMobile = windowWidth <= 812 && true;

const LinesShapesId = () => {
  const [counter, setCounter] = useState(5);
  const [rewardState, setRewardState] = useState('rest');

  return <View style={styles.mainContainer}>
           <Confetti rewardState={rewardState}/>
           <ImageBackground style={styles.bgimagewindow} source={require("../../../assets/window.png")} resizeMode="contain">
           <LineHorizontal style={styles.LineHorizontal1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal3} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           </ImageBackground> 
           
           <ImageBackground style={styles.bgimagehouse} source={ require("../../../assets/house.png")} resizeMode="contain">
           <LineHorizontal style={styles.LineHorizontal4} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal5} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           </ImageBackground>
            </View>
}

const styles = StyleSheet.create({
mainContainer: {
  width: '100%',
  //height: "100%",
 flex: 1,
 //borderWidth: 10,
 position: 'relative'
},
bgimagewindow: {
  position: "absolute",
  marginTop: isMobile ? '2%' : '6%',
  borderRadius: 20,
  left: isMobile ? '50%' : '40%',
  top: isMobile ? "0%" : '-7%',
  aspectRatio: 1/1,
 direction:'ltr',
  //borderWidth: 8,
  height: isMobile ?'100%' : '100%',
  //width: isMobile ?'100%' : 75,
 // flex:1,
},
bgimagehouse: {
  position: "absolute",
  marginTop: isMobile ? '2%' : '6%',
  borderRadius: 20,
  left: isMobile ? '12%' : '0%',
  top: isMobile ? "9%" : '0%',
  aspectRatio: 1/1,
  //width: isMobile ? "100%" : 75,
  height: isMobile ? '85%' : '85%',
  direction: 'ltr',
  //flex:1,
  //borderWidth: 8

},
LineHorizontal1: {
  position: "absolute",
  width: isMobile? "31%" : "30%",
  height: isMobile? "2%" : "2%",
  top: isMobile? "25%" : "25%",
  left: isMobile? "30%" : "30%",
  zIndex:1,
  
},
LineHorizontal2: {
  position: "absolute",
  width: isMobile? "31%" : "30%",
  height: isMobile? "2%" : "2%",
  top: isMobile? "49%" : "49%",
  left: isMobile? "30%" : "30%",
  zIndex:1,
  
},

LineHorizontal3: {
  position: "absolute",
  width: isMobile? "31%" : "30%",
  height: isMobile? "2%" : "2%",
  top: isMobile? "74%" : "72%",
  left: isMobile? "30%" : "30%",
  zIndex:1,
  
},
LineHorizontal4: {
  position: "absolute",
  width: isMobile? "41%" : "41%",
  height: isMobile? "2%" : "2%",
  top: isMobile? "77%" : "77%",
  left: isMobile? "27%" : "27%",
  zIndex:1,
  
},
LineHorizontal5: {
  position: "absolute",
  width: isMobile? "41%" : "41%",
  height: isMobile? "2%" : "2%",
  top: isMobile? "39%" : "39%",
  left: isMobile? "27%" : "27%",
  zIndex:1,
  // borderRadius: 20,
  // borderWidth:2,
  //borderColor:"red",
  
},
});

export default LinesShapesId;