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
           {/* <Text style = {styles.Text}>מצאו את הקווים השוכבים </Text> */}
           
           <ImageBackground style={styles.bgimagewindow} source={require("../../../assets/window.png")} resizeMode="contain">
           <LineHorizontal style={styles.LineHorizontal1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal3} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           </ImageBackground>

           <ImageBackground style={styles.bgimagehouse} source={ require("../../../assets/house.png")} resizeMode="contain">
           <LineHorizontal style={styles.LineHorizontal4} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal5} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           </ImageBackground>
          {/* <ImageBackground style={styles.bgimagebicycle} source={rewardState == 'reward' ? require("../../../assets/bicycle.png") : require("../../../assets/bicycle.png")} resizeMode="contain">
          
          </ImageBackground> */}
            </View>
}

const styles = StyleSheet.create({
  Text: {
    fontSize:15,
    color: "#002266", 
  //position: "absolute",
  fontWeight: 'bold',
  left: isMobile ? '35%' : '6%',
  top: isMobile ? "0%" : '18%',
  position: "absolute",

},
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
  left: isMobile ? '50%' : '6%',
  top: isMobile ? "-3%" : '18%',
  aspectRatio: 1/1,
  direction: 'ltr',
  //borderWidth: 8,
  height: isMobile ?'100%' : 75,
  direction: 'ltr',

},
bgimagehouse: {
  position: "absolute",
  marginTop: isMobile ? '2%' : '6%',
  borderRadius: 20,
  left: isMobile ? '12%' : '6%',
  top: isMobile ? "9%" : '18%',
  aspectRatio: 1/1,
  //width: isMobile ? "100%" : 75,
  height: isMobile ? '82%' : 75,
  direction: 'ltr',
  //borderWidth: 8

},
LineHorizontal1: {
  position: "absolute",
  height: isMobile? '90%' : "10%",
  width: isMobile? "30%" : "10%",
  top: isMobile? "0%" : "10%",
  left: isMobile? "30%" : "80%",
  zIndex:1,
  borderWidth:2,
  borderColor:"blue"
},
LineHorizontal2: {
  position: "absolute",
  height: isMobile? '30%' : "10%",
  width: isMobile? "30%" : "10%",
  top: isMobile? "23%" : "70%",
  left: isMobile? "30%" : "20%",
  zIndex:1,
  borderWidth:2,
  borderColor:"pink",
},

LineHorizontal3: {
  position: "absolute",
  width: isMobile? "30%" : "10%",
  height: isMobile? '30%' : "10%",
  top: isMobile? "47%" : "40%",
  left: isMobile? "30%" : "50%",
  zIndex:1,
  borderWidth:2,
  borderColor:"purple"

},
LineHorizontal4: {
  position: "absolute",
  //height: 100,
  width: isMobile? "40%" : "10%",
  top: isMobile? "9%" : "10%",
  left: isMobile? "28%" : "80%",
  borderWidth:2,
  borderColor:"red"



},
LineHorizontal5: {
  position: "absolute",
  width: isMobile? "42%" : "10%",
 // height: 100,
  top: isMobile? "43%" : "40%",
  left: isMobile? "28%" : "50%",
  borderWidth:2,
  borderColor:"green"

},
});

export default LinesShapesId;