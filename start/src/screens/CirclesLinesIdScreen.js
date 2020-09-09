import React, {useState, useEffect} from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity,ImageBackground, Image} from "react-native";
import ButtonsMenu from "../components/HomeButton"
import { Col, Row, Grid } from "react-native-easy-grid";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import CirclesId from "../components/intro/CirclesId";
import LinesId from "../components/intro/LinesId";
import LinesAndCirclesId from "../components/intro/LinesAndCirclesId";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 60;

const patterns = [
   { name: <LinesId></LinesId>},
   { name: <CirclesId></CirclesId>},
   { name: <LinesAndCirclesId></LinesAndCirclesId>},
];

const CirclesLinesIdScreen = ({navigation}) => {
    //const [stage, setStage] = useState(patterns[0]);
    const [counter, setCounter] = useState(0);


    return <ImageBackground style={styles.bgimage} source={require("../../assets/playground.jpg")} resizeMode="cover"> 
        <HomeButton onPress={() => {navigation.navigate('Home')}}/>
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
  bgimage: {
    position: "relative",
    flex: 1
  }
});

export default CirclesLinesIdScreen;