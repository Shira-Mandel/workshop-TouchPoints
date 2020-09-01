import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Image} from "react-native";
import ButtonsMenu from "../components/ButtonsMenu"
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import normalize from "react-native-normalize";
import { Video, Audio } from 'expo-av';
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Four from "../components/Four";
import Five from "../components/Five";
import Six from "../components/Six";
import Seven from "../components/Seven";
import Eight from "../components/Eight";
import Nine from "../components/Nine";
import Balloons from "../animations/Balloons";

const digits = [
  { name: <One isNaked={true}></One>},
  { name: <Two isNaked={true}></Two>},
  { name: <Three isNaked={true}></Three>},
  { name: <Four isNaked={true}></Four>},
  { name: <Five isNaked={true}></Five>},
  { name: <Six isNaked={true}></Six>},
  { name: <Seven isNaked={true}></Seven>},
  { name: <Eight isNaked={true}></Eight>},
  { name: <Nine isNaked={true}></Nine>},
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

export default HomeScreen = ({navigation}) =>
{
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
  
     React.useEffect(
       () => navigation.addListener('blur', () => setIsPlay(false)),
       []
     );
     return <View style={{height: '100%', width: '100%'}}>
    {music}
  <Grid style={{zIndex: 1, flex: 1}}>
  <Image style={{height: "25%", width: '60%', alignSelf: "center"}} source={require('../../assets/header.png')}/>
    <Row style= {styles.list1}>
      <ButtonsMenu title="מבוא" navigate={() => 
        navigation.navigate('Intro', {play: () => setIsPlay(true), pause: () => setIsPlay(false)})}/>
      <ButtonsMenu title = "לימוד ספרות" navigate = {() => 
        navigation.navigate('LearningDigitsMenu', {play: () => setIsPlay(true), pause: () => setIsPlay(false)})}/>
      <ButtonsMenu title = "זיהוי ספרות" navigate = {() => navigation.navigate('IdentifyDigits', {arr: shuffleDeck(digits)})}/>
    </Row>
    <Row style={styles.list2}>
        <TouchableOpacity style={styles.infoStyle} onPress={() => navigation.navigate('AppInfo', {play: () => setIsPlay(true), pause: () => setIsPlay(false)})}>
         <MaterialCommunityIcons name="information" style={styles.muteIcon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mute} onPress={() => {setIsMute(!isMute)}}>
    <MaterialCommunityIcons style={styles.muteIcon} name="music-circle" color={isMute? "grey" : "black"}/>
  </TouchableOpacity>
      <ButtonsMenu title = "חיבור תאומים" navigate= {() => navigation.navigate('AddingTwins')}/>
      <ButtonsMenu title = "חיבור ספרות שונות" navigate= {() => navigation.navigate('AddingNumbers')}/>
    </Row>
  </Grid>
  <Balloons style={styles.bgimage}/>
  </View>
  // return <ImageBackground style={styles.bgimage} source={require("../../assets/stars.png")} resizeMode="cover">
  //   {music}
  // <Grid style={{flex: 1}}>
  //   <Row style= {styles.list1}>
  //     <ButtonsMenu title="מבוא" navigate={() => 
  //       navigation.navigate('Intro', {play: () => setIsPlay(true), pause: () => setIsPlay(false)})}/>
  //     <ButtonsMenu title = "לימוד ספרות" navigate = {() => 
  //       navigation.navigate('LearningDigitsMenu', {play: () => setIsPlay(true), pause: () => setIsPlay(false)})}/>
  //     <ButtonsMenu title = "זיהוי ספרות" navigate = {() => navigation.navigate('IdentifyDigits', {arr: shuffleDeck(digits)})}/>
  //   </Row>
  //   <Row style={styles.list2}>
  //       <TouchableOpacity style={styles.infoStyle} onPress={() => navigation.navigate('AppInfo')}>
  //        <Entypo name="info-with-circle" style={styles.infoIcon}/>
  //       </TouchableOpacity>
  //     <ButtonsMenu title = "חיבור תאומים" navigate= {() => navigation.navigate('AddingTwins')}/>
  //     <ButtonsMenu title = "חיבור ספרות שונות" navigate= {() => navigation.navigate('AddingNumbers')}/>
  //   </Row>
  // </Grid>
  // </ImageBackground>
};

styles = StyleSheet.create({
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
    marginBottom: "10%",
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
      top: "100%",
      left: "2%"
  },
  muteIcon: {
    fontSize: normalize(30),
  },
  bgimage: {
    position: "relative",
    flex: 1,
  },
  mute: {
    position: "absolute",
    top: "60%",
    left: "2%",
    
  }
});