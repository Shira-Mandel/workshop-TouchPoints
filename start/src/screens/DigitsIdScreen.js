import React, {setProps, useState, useEffect} from "react";
import { Button, StyleSheet, View,TouchableOpacity, ImageBackground} from "react-native";
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

const shuffleDeck = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const patterns = shuffleDeck([
  <One isNaked={true}></One>,
  <Two isNaked={true}></Two>,
  <Three isNaked={true}></Three>,
  <Four isNaked={true}></Four>,
  <Five isNaked={true}></Five>,
  <Six isNaked={true}></Six>,
  <Seven isNaked={true}></Seven>,
  <Eight isNaked={true}></Eight>,
  <Nine isNaked={true}></Nine>,
  ]);

const DigitsIdScreen = ({navigation, route}) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [counter, setCounter] = useState(0);
  const Curr = patterns[counter].type;

    return <ImageBackground style={styles.bgimage} source={require("../../assets/playground.jpg")} resizeMode="cover"> 
            <HomeButton onPress={() => {navigation.navigate('Home')}}/>
            <Curr isNaked={true} enableNext={() => setIsDisabled(false)}></Curr>
            <NextButton disabled={isDisabled} onPress={() => {
              if (counter >= 8)
              {
                  navigation.navigate('Home');//in case of 9
              }
              else
              {
                  setIsDisabled(true);
                  setCounter(counter + 1)
            }}}/>
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
    alignSelf: "center",
    backgroundColor: "black",
    aspectRatio: 1 / 1,
    height: '45%',
    top: "110%",
    left: "2%"
},
  bgimage: {
    position: "relative",
    height: '100%',
    width: '100%',
  },
  home: {
    position: "absolute",
    left: '0%',
    top: '-4%',
    zIndex: 1
}
});

export default DigitsIdScreen;