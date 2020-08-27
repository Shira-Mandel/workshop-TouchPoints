import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, ImageBackground} from "react-native";
import ButtonsMenu from "../components/ButtonsMenu"
import { Entypo } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import normalize from "react-native-normalize";
import { Video, Audio } from 'expo-av';


export default HomeScreen = ({navigation}) =>
{
  const [isPlay, setIsPlay] = useState(true);
    
    React.useEffect(
      () => navigation.addListener('focus', () => setIsPlay(true)),
      []
    );
  
    React.useEffect(
      () => navigation.addListener('blur', () => setIsPlay(false)),
      []
    );
  return <ImageBackground style={styles.bgimage} source={require("../../assets/stars.png")} resizeMode="cover">
    <Video
    source={require("../../assets/playground.mp3")}
    shouldPlay={isPlay}
    isLooping={true}
    volume={0.1}
    useNativeControls ={false}
  />
  <Grid style={{flex: 1}}>
    <Row style= {styles.list1}>
      <ButtonsMenu title = "מבוא" navigate = {() => {
        navigation.navigate('Intro')
        }}/>
      <ButtonsMenu title = "לימוד ספרות" navigate = {() => navigation.navigate('LearningDigitsMenu')}/>
      <ButtonsMenu title = "זיהוי ספרות" navigate = {() => navigation.navigate('IdentifyDigits')}/>
    </Row>
    <Row style={styles.list2}>
        <TouchableOpacity style={styles.infoStyle} onPress={() => navigation.navigate('AppInfo')}>
         <Entypo name="info-with-circle" style={styles.infoIcon}/>
        </TouchableOpacity>
      <ButtonsMenu title = "חיבור תאומים" navigate= {() => navigation.navigate('AddingTwins')}/>
      <ButtonsMenu title = "חיבור ספרות שונות" navigate= {() => navigation.navigate('AddingNumbers')}/>
    </Row>
  </Grid>
  </ImageBackground>
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
      fontSize: normalize(30),
  },
  infoStyle: {
      position: "absolute",
      top: "100%",
      left: "2%"
  },
  bgimage: {
    position: "relative",
    flex: 1,
  }
});