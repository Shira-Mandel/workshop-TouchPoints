import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Image, Dimensions} from "react-native";
import ButtonsMenu from "../components/ButtonsMenu"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";
import { Video } from 'expo-av';
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Four from "../components/Four";
import Five from "../components/Five";
import Six from "../components/Six";
import Seven from "../components/Seven";
import Eight from "../components/Eight";
import Nine from "../components/Nine";
import LearningDigitsButton from "../components/LearningDigitsButton";
import IntroButton from "../components/IntroButton";
import DiffDigitsButton from "../components/DiffDigitsButton";
import Balloons from "../animations/Balloons";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const twins = [
  {digit: <One isAdd={true} isNaked={true}/>, value: 2},
  {digit: <Two isAdd={true} isNaked={true}/>, value: 4},
  {digit: <Three isAdd={true} isNaked={true}/>, value: 6},
  {digit: <Four isAdd={true} isNaked={true}/>, value: 8},
];

const pairs = [
  {flag: false, first: <One isRight={false} isAdd={true} isNaked={true}></One>, second: <Two isRight={true} isAdd={true} isNaked={true}></Two>, value: 3},
  {flag: false, first: <One isRight={false} isAdd={true} isNaked={true}></One>, second: <Three isRight={true} isAdd={true} isNaked={true}></Three>, value: 4},
  {flag: false, first: <One isRight={false} isAdd={true} isNaked={true}></One>, second: <Four isRight={true} isAdd={true} isNaked={true}></Four>, value: 5},
  {flag: false, first: <One isRight={false} isAdd={true} isNaked={true}></One>, second: <Five isRight={true} isAdd={true} isNaked={true}></Five>, value: 6},
  {flag: false, first: <One isRight={false} isAdd={true} isNaked={true}></One>, second: <Six isRight={true} isAdd={true} isNaked={true}></Six>, value: 7},
  {flag: false, first: <One isRight={false} isAdd={true} isNaked={true}></One>, second: <Seven isRight={true} isAdd={true} isNaked={true}></Seven>, value: 8},
  {flag: false, first: <One isRight={false} isAdd={true} isNaked={true}></One>, second: <Eight isRight={true} isAdd={true} isNaked={true}></Eight>, value: 9},
  {flag: false, first: <Two isRight={false} isAdd={true} isNaked={true}></Two>, second: <Three isRight={true} isAdd={true} isNaked={true}></Three>, value: 5},
  {flag: false, first: <Two isRight={false} isAdd={true} isNaked={true}></Two>, second: <Four isRight={true} isAdd={true} isNaked={true}></Four>, value: 6},
  {flag: false, first: <Two isRight={false} isAdd={true} isNaked={true}></Two>, second: <Five isRight={true} isAdd={true} isNaked={true}></Five>, value: 7},
  {flag: false, first: <Two isRight={false} isAdd={true} isNaked={true}></Two>, second: <Six isRight={true} isAdd={true} isNaked={true}></Six>, value: 8},
  {flag: false, first: <Two isRight={false} isAdd={true} isNaked={true}></Two>, second: <Seven isRight={true} isAdd={true} isNaked={true}></Seven>, value: 9},
  {flag: false, first: <Three isRight={false} isAdd={true} isNaked={true}></Three>, second: <Four isRight={true} isAdd={true} isNaked={true}></Four>, value: 7},
  {flag: false, first: <Three isRight={false} isAdd={true} isNaked={true}></Three>, second: <Five isRight={true} isAdd={true} isNaked={true}></Five>, value: 8},
  {flag: false, first: <Three isRight={false} isAdd={true} isNaked={true}></Three>, second: <Six isRight={true} isAdd={true} isNaked={true}></Six>, value: 9},//
  {flag: false, first: <Four isRight={false} isAdd={true} isNaked={true}></Four>, second: <Five isRight={true} isAdd={true} isNaked={true}></Five>, value: 9},
  {flag: true, first: <Two isRight={false} isAdd={true} isNaked={true}></Two>, second: <One isRight={true} isAdd={true} isNaked={true}></One>, value: 3},
  {flag: true, first: <Three isRight={false} isAdd={true} isNaked={true}></Three>, second: <One isRight={true} isAdd={true} isNaked={true}></One>, value: 4},
  {flag: true, first: <Four isRight={false} isAdd={true} isNaked={true}></Four>, second: <One isRight={true} isAdd={true} isNaked={true}></One>, value: 5},
  {flag: true, first: <Five isRight={false} isAdd={true} isNaked={true}></Five>, second: <One isRight={true} isAdd={true} isNaked={true}></One>, value: 6},
  {flag: true, first: <Six isRight={false} isAdd={true} isNaked={true}></Six>, second: <One isRight={true} isAdd={true} isNaked={true}></One>, value: 7},
  {flag: true, first: <Seven isRight={false} isAdd={true} isNaked={true}></Seven>, second: <One isRight={true} isAdd={true} isNaked={true}></One>, value: 8},
  {flag: true, first: <Eight isRight={false} isAdd={true} isNaked={true}></Eight>, second: <One isRight={true} isAdd={true} isNaked={true}></One>, value: 9},
  {flag: true, first: <Three isRight={false} isAdd={true} isNaked={true}></Three>, second: <Two isRight={true} isAdd={true} isNaked={true}></Two>, value: 5},
  {flag: true, first: <Four isRight={false} isAdd={true} isNaked={true}></Four>, second: <Two isRight={true} isAdd={true} isNaked={true}></Two>, value: 6},
  {flag: true, first: <Five isRight={false} isAdd={true} isNaked={true}></Five>, second: <Two isRight={true} isAdd={true} isNaked={true}></Two>, value: 7},
  {flag: true, first: <Six isRight={false} isAdd={true} isNaked={true}></Six>, second: <Two isRight={true} isAdd={true} isNaked={true}></Two>, value: 8},
  {flag: true, first: <Seven isRight={false} isAdd={true} isNaked={true}></Seven>, second: <Two isRight={true} isAdd={true} isNaked={true}></Two>, value: 9},
  {flag: true, first: <Four isRight={false} isAdd={true} isNaked={true}></Four>, second: <Three isRight={true} isAdd={true} isNaked={true}></Three>, value: 7},
  {flag: true, first: <Five isRight={false} isAdd={true} isNaked={true}></Five>, second: <Three isRight={true} isAdd={true} isNaked={true}></Three>, value: 8},
  {flag: true, first: <Six isRight={false} isAdd={true} isNaked={true}></Six>, second: <Three isRight={true} isAdd={true} isNaked={true}></Three>, value: 9},//
  {flag: true, first: <Five isRight={false} isAdd={true} isNaked={true}></Five>, second: <Four isRight={true} isAdd={true} isNaked={true}></Four>, value: 9}
];

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

export default HomeScreen = ({navigation}) => {
  const [isPlay, setIsPlay] = useState(true);
  const [isMute, setIsMute] = useState(false);

  const music = <Video
  source={require("../../assets/playground.mp3")}
  shouldPlay={isPlay && !isMute}
  isLooping={true}
  volume={0.1}
  useNativeControls ={false}
/>

React.useEffect(
  () => navigation.setOptions({headerRight: () => <TouchableOpacity style={{marginEnd: 10}} onPress={() => {
    setIsMute(!isMute)
  }}>
    <Octicons style={styles.mute} name={isMute? "unmute" : "mute"} size={28} color="white"/>
  </TouchableOpacity>})
);
    
    React.useEffect(
      () => navigation.addListener('focus', () => setIsPlay(true)),
      []
    );
  
     return <View style={{direction: "ltr", height: '100%', width: '100%'}}>
    {music}
  <Image style={{zIndex: 1, height: "30%", width: '100%', alignSelf: "center"}} resizeMode="contain" source={require('../../assets/header.png')}/>
      <IntroButton onPress={() => 
        navigation.navigate('Intro', {play: () => setIsPlay(true), pause: () => setIsPlay(false)})} style={styles.buttonMenu1}/>
      <LearningDigitsButton onPress={() => navigation.navigate('LearningDigitsMenu', {play: () => setIsPlay(true), pause: () => setIsPlay(false)})} style={styles.buttonMenu2}/>
      <ButtonsMenu resize="cover" source={require("../../assets/images/digitsIDIcon.png")} style={styles.buttonMenu3} title = "שיום ספרות" navigate = {() => {
        setIsPlay(false);
        navigation.navigate('IdentifyDigits')}}/>
      <ButtonsMenu resize="contain" source={require("../../assets/images/addTwinsIcon.png")} style={styles.buttonMenu4} title = "חיבור תאומים" navigate= {() => {
        setIsPlay(false);
        navigation.navigate('AddingTwins', {arr: shuffleDeck(twins)})}}/>
      <DiffDigitsButton style={styles.buttonMenu5} onPress={() => 
        navigation.navigate('AddingNumbers', {play: () => setIsPlay(true), pause: () => setIsPlay(false), arr: shuffleDeck(pairs)})}/>
        <TouchableOpacity style={styles.infoStyle} onPress={() => navigation.navigate('AppInfo', {play: () => setIsPlay(true), pause: () => setIsPlay(false)})}>
         <MaterialCommunityIcons name="information" style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mute} onPress={() => {setIsMute(!isMute)}}>
          <MaterialCommunityIcons style={styles.icon} name="music-circle" color={isMute? "grey" : "black"}/>
        </TouchableOpacity>
  <Balloons style={styles.bgimage}/>
  </View>
};

styles = StyleSheet.create({
  buttonMenu1: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    borderColor: "grey",
    borderWidth: 0.5,
    left: isMobile? "20%" : "10%", 
    top: "30%",
    shadowOffset: { width: 0.5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    position: "absolute"
  },
  buttonMenu2: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    left: isMobile? "45%" : "40%",
    top: "30%",
    shadowColor: "#36393d",
    shadowOffset: { width: 0.5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    position: "absolute",
  },
  buttonMenu3: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    right: isMobile? "20%" : "10%", 
    top: "30%",
    shadowOffset: { width: 0.5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    position: "absolute",
  },
  buttonMenu4: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    backgroundColor: "#537dc5",
    left: isMobile? "32%" : "25%",
    top: isMobile? "63%" : "65%",
    shadowOffset: { width: 0.5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    position: "absolute",
  },
  buttonMenu5: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    right: isMobile? "32%" : "25%",
    top: isMobile? "63%" : "65%",
    shadowOffset: { width: 0.5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    position: "absolute",
  },
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
  infoIcon: {
    fontSize: normalize(25),
    borderColor: "black", 
    borderWidth: 2, 
    borderRadius: 45, 
    paddingHorizontal: 3,
  },
  infoStyle: {
    position: "absolute",
    bottom: "5%",
    left: "2%",
    zIndex: 1
  },
  icon: {
    fontSize: isMobile? 60 : 80,
  },
  bgimage: {
    position: "relative",
    flex: 1,
  },
  mute: {
    position: "absolute",
    bottom: isMobile? "20%" : "15%",
    left: "2%",
    zIndex: 1
  },
  text: {
    fontSize: isMobile? 14 : 25,
    fontWeight: "bold",
    textAlign: "center",
}
});