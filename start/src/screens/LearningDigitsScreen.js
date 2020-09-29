import React, {useState} from "react";
import { StyleSheet, Dimensions, ImageBackground} from "react-native";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import PreviousButton from "../components/PreviousButton";
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three"; 
import Four from "../components/Four";
import Five from "../components/Five";
import Six from "../components/Six";
import Seven from "../components/Seven";
import Eight from "../components/Eight";
import Nine from "../components/Nine";
import { Video } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 60;

const LearningDigitsScreen = ({ navigation, route }) => {
  const [counter, setCounter] = useState(route.params.init);
  const [isDisabled, setIsDisabled] = useState(true);
 
  const patterns = [
    { name: <One isNaked={false} enableNext={() => setIsDisabled(false)}></One>},
    { name: <Two isNaked={false} enableNext={() => setIsDisabled(false)}></Two>},
    { name: <Three isNaked={false} enableNext={() => setIsDisabled(false)}></Three>},
    { name: <Four isNaked={false} enableNext={() => setIsDisabled(false)}></Four>},
    { name: <Five isNaked={false} enableNext={() => setIsDisabled(false)}></Five>},
    { name: <Six isNaked={false} enableNext={() => setIsDisabled(false)}></Six>},
    { name: <Seven isNaked={false} enableNext={() => setIsDisabled(false)}></Seven>},
    { name: <Eight isNaked={false} enableNext={() => setIsDisabled(false)}></Eight>},
    { name: <Nine isNaked={false} enableNext={() => setIsDisabled(false)}></Nine>},
  ];

    return <ImageBackground style={styles.bgimage} source={require("../../assets/playground.jpg")} resizeMode="cover"> 
            <HomeButton onPress={() => {navigation.navigate('Home')}}/>
            {patterns[counter].name}
            {<Video
                source={require("../../assets/sounds/touch-points-remember.mp4")}
                shouldPlay={counter==route.params.init}
                isLooping={false}
                volume={0.1}
                useNativeControls ={false}/>}
            <NextButton disabled={isDisabled} onPress={() => {
              if (counter >= patterns.length - 1)
              {
                  navigation.navigate('LearningDigitsMenu');//in case of 9
              }
              else
              {
                  setIsDisabled(true)
                  setCounter(counter + 1)
            }}}/>
            <PreviousButton onPress={() => {
              if (counter < 0)
              {
                  navigation.navigate('LearningDigitsMenu');//in case of 9
              }
              else
              {
                  setCounter(counter - 1)
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

export default LearningDigitsScreen;