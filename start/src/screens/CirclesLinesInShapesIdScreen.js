import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, TouchableOpacity,ImageBackground, Image} from "react-native";
import ButtonsMenu from "../components/HomeButton"
import { Col, Row, Grid } from "react-native-easy-grid";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import CirclesShapesId from "../components/intro/CirclesShapesId";
import LinesShapesId from "../components/intro/LinesShapesId";

const patterns = [
   { name: <LinesShapesId></LinesShapesId>},
   { name: <CirclesShapesId></CirclesShapesId>},
];

const CirclesLinesInShapesIdScreen = ({navigation}) => {
    //const [stage, setStage] = useState(patterns[0]);
    const [counter, setCounter] = useState(0);
    
    return <ImageBackground style={styles.bgimage} source={require("../../assets/playground.jpg")} resizeMode="cover"> 
        <HomeButton onPress={() => navigation.navigate('Home')}/>
        {patterns[counter].name}
        <NextButton onPress={() => {
            if (counter >= patterns.length - 1)
            {
                navigation.navigate('Intro');
            }
            else
            {
                //setStage(patterns[counter + 1]); {/*add limit to the counter, when counter reaches the end of the list go to previous screen*/}
                setCounter(counter + 1)
            }
        }}/>
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
  bgimage: {
    position: "relative",
    flex: 1
  }
});

export default CirclesLinesInShapesIdScreen;