import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ButtonsMenu from "../components/HomeButton"
import { Col, Row, Grid } from "react-native-easy-grid";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Four from "../components/Four";
import Five from "../components/Five";
import Six from "../components/Six";
import Seven from "../components/Seven";
import Eight from "../components/Eight";
import Nine from "../components/Nine";



const patterns = [
  { name: <One></One>},
  { name: <Two></Two>},
  { name: <Three></Three>},
  { name: <Four></Four>},
  { name: <Five></Five>},
  { name: <Six></Six>},
  { name: <Seven></Seven>},
  { name: <Eight></Eight>},
  { name: <Nine></Nine>},
];

const LearningDigitsScreen = ({navigation}) => {
    const [stage, setStage] = useState(patterns[0]);
    const [counter, setCounter] = useState(0);
    
    return <ImageBackground style={styles.bgimage} source={require("../../assets/playground.jpg")} resizeMode="cover"> 
        <Row>
          <HomeButton navigate= {() => navigation.navigate('Home')}/>
            {stage.name}
            <NextButton onPress= {() => {
            if (counter >= patterns.length - 1)
            {
                navigation.navigate('LearningDigitsMenu');//in case of 9
            }
            else
            {
                setStage(patterns[counter + 1]); {/add limit to the counter, when counter reaches the end of the list go to previous screen/}
                setCounter(counter + 1)
            }
           }}/>
          </Row>
        </ImageBackground>
};

const styles = StyleSheet.create({
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
  points: {
    //position: "absolute",
    //opacity: 100,
    alignSelf: "center",
    backgroundColor: "black",
    aspectRatio: 1 / 1,
    height: '45%',
    top: "110%",
    left: "2%"
    //opacity: 50
},
  bgimage: {
    position: "relative",
    //opacity: 0.7,
    flex: 1,
  }
});

export default LearningDigitsScreen;